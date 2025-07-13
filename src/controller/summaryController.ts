import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { dbMain } from "../prisma/client";
import { format } from "date-fns";

export const getIntercomeSummary = async (req: Request, res: Response) => {
  try {
    const { date } = req.query;

    const TIMEZONE_OFFSET = 7 * 60 * 60 * 1000; // UTC+7

    let whereCondition = {};

    if (date) {
      const localStart = new Date(`${date}T00:00:00+07:00`);
      const localEnd = new Date(`${date}T23:59:59.999+07:00`);

      // Konversi ke UTC (otomatis saat parsing ISO + offset)
      const startUTC = new Date(localStart.toISOString());
      const endUTC = new Date(localEnd.toISOString());

      whereCondition = {
        CreatedAt: {
          gte: startUTC,
          lte: endUTC,
        },
      };
    } else {
      res.status(400).json({
        status: "ERROR",
        message: "Parameter `date` wajib diisi dalam format YYYY-MM-DD",
      });
    }

    const totalItems = await dbMain.occIntercome.aggregate({
      where: whereCondition,
      _sum: {
        CountInCall: true,
        CountMissCall: true,
      },
    });

    res.status(200).json({
      status: "SUCCESS",
      message: "Intercome summary fetched",
      data: totalItems,
    });
  } catch (error) {
    console.error("Error fetching intercome summary:", error);
    res.status(500).json({
      status: "ERROR",
      message: "Internal server error",
    });
  }
};

export const getMonthlySummary = async (req: Request, res: Response) => {
  try {
    const result = await dbMain.$queryRaw<
      { month: string; total: number }[]
    >`SELECT 
        DATE_FORMAT(CONVERT_TZ(createdAt, '+00:00', '+07:00'), '%Y-%m') AS month,
        COUNT(*) AS total
      FROM OccIssue
      WHERE deletedAt IS NULL
      GROUP BY month
      ORDER BY month ASC;`;

    const formatted = result.map((row) => ({
      ...row,
      total: Number(row.total), // Convert BigInt to Number
    }));

    res.json({ status: "SUCCESS", data: formatted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "ERROR", message: "Internal server error" });
  }
};

export const getMonthlySummaryCategory = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await dbMain.$queryRaw<
      { month: string; total: number }[]
    >`SELECT 
        DATE_FORMAT(CONVERT_TZ(createdAt, '+00:00', '+07:00'), '%Y-%m') AS month,
        COUNT(*) AS total
      FROM OccIssue
      WHERE deletedAt IS NULL
      GROUP BY month
      ORDER BY month ASC;`;

    const formatted = result.map((row) => ({
      ...row,
      total: Number(row.total), // Convert BigInt to Number
    }));

    res.json({ status: "SUCCESS", data: formatted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "ERROR", message: "Internal server error" });
  }
};

export const getIssueStatusSummary = async (req: Request, res: Response) => {
  try {
    const { month } = req.query;

    const whereClause = month
      ? `AND DATE_FORMAT(CONVERT_TZ(createdAt, '+00:00', '+07:00'), '%Y-%m') = '${month}'`
      : "";

    const result = await dbMain.$queryRawUnsafe<
      { status: string; total: number }[]
    >(
      `
          SELECT status, COUNT(*) AS total
          FROM OccIssue
          WHERE deletedAt IS NULL
          ${whereClause}
          GROUP BY status
        `
    );

    const formatted = result.map((row) => ({
      ...row,
      total: Number(row.total), // Convert BigInt to Number
    }));
    res.json({ status: "SUCCESS", data: formatted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "ERROR", message: "Internal server error" });
  }
};

export const CallByQuantity = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const itemsPerPage = parseInt(req.query.limit as string) || 10;

    const year = parseInt(req.query.year as string) || new Date().getFullYear();
    const monthFilter = req.query.month as string | undefined; // "01" - "12"

    const startDate = new Date(`${year}-01-01`);
    const endDate = new Date(`${year}-12-31`);

    const records = await dbMain.occIntercome.findMany({
      where: {
        CreatedAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      select: {
        Locations: true,
        CreatedAt: true,
        CountInCall: true,
      },
    });

    const monthMap: Record<string, string> = {
      "01": "jan",
      "02": "feb",
      "03": "mar",
      "04": "apr",
      "05": "mei",
      "06": "juni",
      "07": "jul",
      "08": "aug",
      "09": "sep",
      "10": "okt",
      "11": "nov",
      "12": "des",
    };

    const summary: Record<string, Record<string, number>> = {};

    for (const record of records) {
      const location = record.Locations;
      const createdMonth = format(new Date(record.CreatedAt), "MM");
      const monthKey = monthMap[createdMonth];

      if (!monthKey) continue;
      if (monthFilter && createdMonth !== monthFilter) continue; // filter bulan jika diset

      if (!summary[location]) summary[location] = {};
      if (!summary[location][monthKey]) summary[location][monthKey] = 0;

      summary[location][monthKey] += record.CountInCall ?? 0;
    }

    const fullData = Object.entries(summary).map(([location, months]) => {
      let total = 0;
      const monthlyCounts: Record<string, number> = {};

      Object.values(monthMap).forEach((m) => {
        const count = months[m] ?? 0;
        monthlyCounts[m] = count;
        total += count;
      });

      const initial = location
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase();

      return {
        location: initial,
        ...monthlyCounts,
        total,
      };
    });

    const paginatedData = fullData.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );

    res.status(200).json({
      metadata: {
        year: year.toString(),
        month: monthFilter ? monthMap[monthFilter] : "all",
        region: "all",
      },
      pagination: {
        page,
        itemsPerPage,
        totalItems: fullData.length,
        totalPages: Math.ceil(fullData.length / itemsPerPage),
      },
      data: paginatedData,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ status: "ERROR", message: "Internal server error" });
  }
};
