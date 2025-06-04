import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

    const totalItems = await prisma.occIntercome.aggregate({
      where: whereCondition,
      _sum: {
        Count: true,
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
    const result = await prisma.$queryRaw<
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
    const result = await prisma.$queryRaw<
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
      ? Prisma.sql`AND DATE_FORMAT(CONVERT_TZ(createdAt, '+00:00', '+07:00'), '%Y-%m') = ${month}`
      : Prisma.empty;
    const result = await prisma.$queryRaw<{ status: string; total: number }[]>(
      Prisma.sql`
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
