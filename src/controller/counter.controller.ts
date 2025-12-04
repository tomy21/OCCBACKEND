import { Request, Response } from "express";
import { dbMain, dbSecondary } from "../prisma/client";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";
import { format, toZonedTime } from "date-fns-tz";
import { addHours, endOfDay, startOfDay } from "date-fns";

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
        Date: formatWIB(new Date()),
      },
      select: {
        Id: true,
        LocationCode: true,
        LocationName: true,
        CodeGate: true,
        CountInMotor: true,
        CountOutMotor: true,
        CountInMobil: true,
        CountOutMobil: true,
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
  const { type, idGate } = req.query;

  const today = format(new Date(), "yyyy-MM-dd");

  try {
    // Get location name
    const location = await dbMain.occRefLocation.findFirst({
      where: { Code: locationCode },
      select: { Name: true },
    });

    if (!location) {
      res
        .status(404)
        .json(createResponse("COUNTER", "ERROR", "Location not found"));
      return;
    }

    // Check existing counter today
    const existingCounter = await dbMain.counterGate.findFirst({
      where: { LocationCode: locationCode, Date: today },
    });

    const isMotor = type === "motor";

    // ============== UPDATE ==============
    if (existingCounter) {
      const updateData = isMotor
        ? { CountInMotor: { increment: 1 } }
        : { CountInMobil: { increment: 1 } };

      await dbMain.counterGate.update({
        where: { Id: existingCounter.Id },
        data: updateData,
      });

      // update history
      await saveOrUpdateGateCounter(Number(idGate), locationCode, 1);

      res.json(
        createResponse("COUNTER", "UPDATE", "CountIn incremented successfully")
      );
      return;
    }

    // ============== CREATE NEW ==============
    const createData = isMotor
      ? {
          LocationCode: locationCode,
          LocationName: location.Name,
          Date: today,
          CountInMotor: 1,
        }
      : {
          LocationCode: locationCode,
          LocationName: location.Name,
          Date: today,
          CountInMobil: 1,
        };

    const newCounter = await dbMain.counterGate.create({ data: createData });

    // create new history row
    await saveOrUpdateGateCounter(Number(idGate), locationCode, 1);

    res.json(
      createResponse("COUNTER", "CREATE", "CountIn created & history added")
    );
  } catch (err: any) {
    console.error("Error incrementing CountIn:", err.message);
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
  const { type, idGate } = req.query;

  const today = format(new Date(), "yyyy-MM-dd");

  try {
    // Get location name
    const location = await dbMain.occRefLocation.findUnique({
      where: { Code: locationCode },
      select: { Name: true },
    });

    if (!location) {
      res
        .status(404)
        .json(createResponse("COUNTER", "ERROR", "Location not found"));
      return;
    }

    // Check existing counter today
    const existingCounter = await dbMain.counterGate.findFirst({
      where: { LocationCode: locationCode, Date: today },
    });

    const isMotor = type === "motor";

    // ============== UPDATE ==============
    if (existingCounter) {
      const updateData = isMotor
        ? { CountOutMotor: { increment: 1 } }
        : { CountOutMobil: { increment: 1 } };

      await dbMain.counterGate.update({
        where: { Id: existingCounter.Id },
        data: updateData,
      });

      // update history
      await saveOrUpdateGateCounter(Number(idGate), locationCode, 1);

      res.json(
        createResponse("COUNTER", "UPDATE", "CountOut incremented successfully")
      );
      return;
    }

    // ============== CREATE NEW ==============
    const createData = isMotor
      ? {
          LocationCode: locationCode,
          LocationName: location.Name,
          Date: today,
          CountOutMotor: 1,
        }
      : {
          LocationCode: locationCode,
          LocationName: location.Name,
          Date: today,
          CountOutMobil: 1,
        };

    const newCounter = await dbMain.counterGate.create({ data: createData });

    // create history
    await saveOrUpdateGateCounter(Number(idGate), locationCode, 1);

    res.json(
      createResponse("COUNTER", "CREATE", "CountOut created & history added")
    );
  } catch (err: any) {
    console.error("Error incrementing CountOut:", err.message);
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
    const locationCode = req.query.locationCode as string;

    const skip = (page - 1) * limit;

    // Ambil data + total count sekaligus
    const [counters, total] = await Promise.all([
      dbMain.counterGate.findMany({
        where: locationCode ? { LocationCode: locationCode } : {},
        skip,
        take: limit,
        orderBy: { CreatedAt: "desc" }, // pastikan format string tanggal konsisten
      }),
      dbMain.counterGate.count(),
    ]);

    // Format CreatedAt dan UpdatedAt menjadi WIB
    const countersFormatted = counters.map((item) => ({
      ...item,
      CreatedAt: formatWIB(item.CreatedAt),
      UpdatedAt: formatWIB(item.UpdatedAt),
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

export const getAllCountersByLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    // const locationId = req.query.locationId as string | undefined;

    // WIB date range
    const now = new Date();
    const todayWIB = addHours(now, 7);

    const todayStr = now.toISOString().split("T")[0];

    const whereClause: any = {
      Date: {
        contains: todayStr,
      },
    };

    // if (locationId) {
    //   whereClause.locationId = locationId;
    // }

    const [counters, total] = await Promise.all([
      dbMain.counterGate.findMany({
        skip,
        take: limit,
        where: whereClause,
        orderBy: { UpdatedAt: "desc" },
      }),
      dbMain.counterGate.count({
        where: whereClause,
      }),
    ]);

    const countersFormatted = counters.map((item) => ({
      ...item,
      CreatedAt: formatWIB(item.CreatedAt),
      UpdatedAt: formatWIB(item.UpdatedAt),
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

// sesuaikan path

export const saveOrUpdateGateCounter = async (
  idGate: number,
  locationCode: string,
  incrementValue: number
) => {
  const today = format(new Date(), "yyyy-MM-dd");

  const existing = await dbMain.occHistoryCounting.findFirst({
    where: {
      idGate,
      locationCode: locationCode,
      createdAt: {
        gte: new Date(today + " 00:00:00"),
        lte: new Date(today + " 23:59:59"),
      },
    },
  });

  if (existing) {
    await dbMain.occHistoryCounting.update({
      where: { id: existing.id },
      data: {
        count: { increment: incrementValue },
      },
    });
  } else {
    await dbMain.occHistoryCounting.create({
      data: {
        idGate,
        locationCode: locationCode,
        count: incrementValue,
      },
    });
  }
};
