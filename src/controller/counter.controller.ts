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

export const incrementCountIn = async (req: Request, res: Response) => {
  const { locationCode } = req.params;
  const today = format(new Date(), "yyyy-MM-dd");

  try {
    // Ambil nama lokasi dari tabel OccRefLocation
    const location = await dbMain.occRefLocation.findUnique({
      where: { Code: locationCode },
      select: { Name: true },
    });

    if (!location) {
      return res
        .status(404)
        .json(createResponse("COUNTER", "ERROR", "Location not found"));
    }

    // Cek apakah sudah ada counter untuk location + tanggal ini
    const existingCounter = await dbMain.counterGate.findFirst({
      where: {
        LocationCode: locationCode,
        Date: today,
      },
    });

    if (existingCounter) {
      // Kalau ada → update
      await dbMain.counterGate.update({
        where: { Id: existingCounter.Id },
        data: { CountIn: { increment: 1 } },
      });
      return res.json(
        createResponse("COUNTER", "UPDATE", "CountIn incremented successfully")
      );
    }

    // Kalau belum ada → insert row baru dengan LocationName
    await dbMain.counterGate.create({
      data: {
        LocationCode: locationCode,
        LocationName: location.Name, // isi dari OccRefLocation
        Date: today,
        CountIn: 1,
        CountOut: 0,
      },
    });

    res.json(createResponse("COUNTER", "CREATE", "New counter created"));
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json(createResponse("COUNTER", "ERROR", "Failed to increment CountIn"));
  }
};

// Increment CountOut
export const incrementCountOut = async (req: Request, res: Response) => {
  const { locationCode } = req.params;
  const today = format(new Date(), "yyyy-MM-dd"); // Tanggal sekarang

  try {
    const location = await dbMain.occRefLocation.findUnique({
      where: { Code: locationCode },
      select: { Name: true },
    });

    if (!location) {
      return res
        .status(404)
        .json(createResponse("COUNTER", "ERROR", "Location not found"));
    }

    // Cek apakah sudah ada counter untuk location + tanggal ini
    const existingCounter = await dbMain.counterGate.findFirst({
      where: {
        LocationCode: locationCode,
        Date: today, // kolom ini harus ada di tabel counterGate
      },
    });

    if (existingCounter) {
      // Kalau ada → update
      await dbMain.counterGate.update({
        where: { Id: existingCounter.Id },
        data: { CountOut: { increment: 1 } },
      });
      return res.json(
        createResponse("COUNTER", "UPDATE", "CountOut incremented successfully")
      );
    }

    // Kalau belum ada → insert row baru dengan LocationName
    await dbMain.counterGate.create({
      data: {
        LocationCode: locationCode,
        LocationName: location.Name, // isi dari OccRefLocation
        Date: today,
        CountOut: 1,
        CountIn: 0,
      },
    });

    res.json(createResponse("COUNTER", "CREATE", "New counter created"));
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
