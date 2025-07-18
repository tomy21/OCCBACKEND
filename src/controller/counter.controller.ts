import { Request, Response } from "express";
import { dbMain, dbSecondary } from "../prisma/client";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";
import { format, toZonedTime } from "date-fns-tz";

const formatWIB = (date: Date): string => {
  const jakartaTime = toZonedTime(date, "Asia/Jakarta");
  return format(jakartaTime, "yyyy-MM-dd HH:mm:ssXXX", {
    timeZone: "Asia/Jakarta",
  });
};

export const createCounter = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { LocationCode, LocationName, CodeGate } = req.body;

  if (!LocationCode) {
    res
      .status(400)
      .json(createResponse("COUNTER", "ERROR", "LocationCode is required"));
    return;
  }

  try {
    const existing = await dbMain.counterGate.findFirst({
      where: { LocationCode },
    });

    if (existing) {
      res
        .status(409)
        .json(createResponse("COUNTER", "ERROR", "Counter already exists"));
      return;
    }

    const newCounter = await dbMain.counterGate.create({
      data: {
        LocationCode,
        LocationName,
        CodeGate,
      },
      select: {
        Id: true,
        LocationCode: true,
        LocationName: true,
        CodeGate: true,
        CountIn: true,
        CountOut: true,
      },
    });

    res
      .status(201)
      .json(createResponse("COUNTER", "CREATE", "Counter created", newCounter));
  } catch (err) {
    console.error("Create Counter Error:", err);
    res
      .status(500)
      .json(createResponse("COUNTER", "ERROR", "Failed to create counter"));
  }
};

export const incrementCountIn = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { locationCode } = req.params;

  try {
    const updated = await dbMain.counterGate.updateMany({
      where: { LocationCode: locationCode },
      data: { CountIn: { increment: 1 } },
    });

    if (updated.count === 0) {
      res
        .status(404)
        .json(createResponse("COUNTER", "ERROR", "Location not found"));
    }

    res.json(
      createResponse("COUNTER", "UPDATE", "CountIn incremented successfully")
    );
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json(createResponse("COUNTER", "ERROR", "Failed to increment CountIn"));
  }
};

// Increment CountOut
export const incrementCountOut = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { locationCode } = req.params;

  try {
    const updated = await dbMain.counterGate.updateMany({
      where: { LocationCode: locationCode },
      data: { CountOut: { increment: 1 } },
    });

    if (updated.count === 0) {
      res
        .status(404)
        .json(createResponse("COUNTER", "ERROR", "Location not found"));
    }

    res.json(
      createResponse("COUNTER", "UPDATE", "CountOut incremented successfully")
    );
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json(createResponse("COUNTER", "ERROR", "Failed to increment CountOut"));
  }
};

export const getAllCounters = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(23, 59, 59, 999);

    const [counters, total] = await Promise.all([
      dbMain.counterGate.findMany({
        skip,
        take: limit,
        orderBy: { CreatedAt: "desc" },
      }),
      dbMain.counterGate.count(),
    ]);

    // const transactionCountsToday =
    //   await dbSecondary.transactionParkingIntegration.groupBy({
    //     by: ["LocationCode"],
    //     _count: true,
    //     where: {
    //       LocationCode: {
    //         in: (
    //           await dbMain.counterGate.findMany({
    //             select: { LocationCode: true },
    //           })
    //         )
    //           .map((item) => item.LocationCode)
    //           .filter((code): code is string => !!code),
    //       },
    //       CreatedOn: {
    //         gte: start,
    //         lte: end,
    //       },
    //     },
    //   });

    // const txMap = new Map(
    //   transactionCountsToday.map((tx) => [tx.LocationCode, tx._count])
    // );

    // Format waktu menjadi WIB
    const countersFormatted = counters.map((item) => ({
      ...item,
      CreatedAt: formatWIB(item.CreatedAt),
      UpdatedAt: formatWIB(item.UpdatedAt),
      // TotalTransactionToday: txMap.get(item.LocationCode) || 0,
    }));

    res.json(
      createPaginatedResponse(
        "COUNTER",
        "READ",
        "Get all counters fetched",
        countersFormatted,
        page,
        limit,
        total
      )
    );
  } catch (err) {
    console.error("Pagination Error:", err);
    res.status(500).json({ error: "Failed to retrieve counters" });
  }
};
