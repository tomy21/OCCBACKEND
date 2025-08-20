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
  const { type } = req.query;
  const today = format(new Date(), "yyyy-MM-dd");

  try {
    // Ambil nama lokasi dari tabel OccRefLocation
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

    // Cek apakah sudah ada counter untuk location + tanggal ini
    const existingCounter = await dbMain.counterGate.findFirst({
      where: {
        LocationCode: locationCode,
        Date: today,
      },
    });

    if (existingCounter) {
      if (type === "motor") {
        // Kalau ada → update
        await dbMain.counterGate.update({
          where: { Id: existingCounter.Id },
          data: { CountInMotor: { increment: 1 } },
        });
        res.json(
          createResponse(
            "COUNTER",
            "UPDATE",
            "CountIn incremented successfully"
          )
        );
        return;
      } else {
        await dbMain.counterGate.update({
          where: { Id: existingCounter.Id },
          data: { CountInMobil: { increment: 1 } },
        });
        res.json(
          createResponse(
            "COUNTER",
            "UPDATE",
            "CountIn incremented successfully"
          )
        );
        return;
      }
    } else {
      // Kalau belum ada → insert row baru dengan LocationName
      if (type === "motor") {
        await dbMain.counterGate.create({
          data: {
            LocationCode: locationCode,
            LocationName: location.Name,
            Date: today,
            CountInMotor: 1,
          },
        });
      } else {
        await dbMain.counterGate.create({
          data: {
            LocationCode: locationCode,
            LocationName: location.Name,
            Date: today,
            CountInMobil: 1,
          },
        });
      }
      res.json(
        createResponse("COUNTER", "CREATE", "CountIn incremented successfully")
      );

      return;
    }
  } catch (err: any) {
    console.error(" Error incrementing CountIn:", err.message);
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
  const { type } = req.query;
  const today = format(new Date(), "yyyy-MM-dd");

  try {
    // Ambil nama lokasi dari tabel OccRefLocation
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

    // Cek apakah sudah ada counter untuk location + tanggal ini
    const existingCounter = await dbMain.counterGate.findFirst({
      where: {
        LocationCode: locationCode,
        Date: today,
      },
    });

    if (existingCounter) {
      if (type === "motor") {
        // Kalau ada → update
        await dbMain.counterGate.update({
          where: { Id: existingCounter.Id },
          data: { CountOutMotor: { increment: 1 } },
        });
        res.json(
          createResponse(
            "COUNTER",
            "UPDATE",
            "Count Out incremented successfully"
          )
        );
        return;
      } else {
        await dbMain.counterGate.update({
          where: { Id: existingCounter.Id },
          data: { CountOutMobil: { increment: 1 } },
        });
        res.json(
          createResponse(
            "COUNTER",
            "UPDATE",
            "Count Out incremented successfully"
          )
        );
        return;
      }
    } else {
      // Kalau belum ada → insert row baru dengan LocationName
      if (type === "motor") {
        await dbMain.counterGate.create({
          data: {
            LocationCode: locationCode,
            LocationName: location.Name,
            Date: today,
            CountOutMotor: 1,
          },
        });
      } else {
        await dbMain.counterGate.create({
          data: {
            LocationCode: locationCode,
            LocationName: location.Name,
            Date: today,
            CountOutMobil: 1,
          },
        });
      }
      res.json(
        createResponse(
          "COUNTER",
          "CREATE",
          "Count Out incremented successfully"
        )
      );

      return;
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json(createResponse("COUNTER", "ERROR", "Failed to increment CountIn"));
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

    // Ambil data + total count sekaligus
    const [counters, total] = await Promise.all([
      dbMain.counterGate.findMany({
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
