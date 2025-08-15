import { Request, Response } from "express";
import { dbMain } from "../prisma/client";
import ExcelJS from "exceljs";
import { create } from "domain";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";

// GET dengan paging + search
export const getUserEvents = async (req: Request, res: Response) => {
  try {
    let { page = "1", limit = "10", search = "" } = req.query;
    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);

    const where = search
      ? {
          OR: [
            { nik: { contains: search as string, mode: "insensitive" } },
            { event: { contains: search as string, mode: "insensitive" } },
          ],
        }
      : {};

    const [data, total] = await Promise.all([
      dbMain.userEventNobu.findMany({
        where,
        skip: (pageNum - 1) * limitNum,
        take: limitNum,
        orderBy: { createdAt: "desc" },
      }),
      dbMain.userEventNobu.count({ where }),
    ]);

    res.json(
      createPaginatedResponse(
        "EVENT",
        "READ",
        "Get all transaction fetched",
        data,
        pageNum,
        limitNum,
        total
      )
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// CREATE dengan validasi NIK unik
export const createUserEvent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { nik, event = "Kemerdekaan" } = req.body;

    if (!nik || !event) {
      res.status(400).json(createResponse("EVENT", "ERROR", "Data required"));
      return;
    }

    const existing = await dbMain.userEventNobu.findUnique({
      where: { nik: nik },
    });

    if (existing) {
      res.status(400).json(createResponse("EVENT", "ERROR", "NIK sudah ada"));
      return;
    }

    const newData = await dbMain.userEventNobu.create({
      data: {
        nik: nik.toUpperCase(),
        event,
      },
    });

    res
      .status(201)
      .json(createResponse("EVENT", "CREATE", "Event created", newData));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("EVENT", "ERROR", "Internal server error"));
  }
};

// EXPORT ke Excel
export const exportUserEvents = async (req: Request, res: Response) => {
  try {
    const data = await dbMain.userEventNobu.findMany({
      orderBy: { createdAt: "desc" },
    });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("User Event Nobu");

    worksheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "NIK", key: "nik", width: 20 },
      { header: "Event", key: "event", width: 30 },
      { header: "Created At", key: "createdAt", width: 25 },
    ];

    data.forEach((row, index) => {
      worksheet.addRow({
        id: index + 1,
        nik: row.nik,
        event: row.event,
        createdAt: row.createdAt.toLocaleString(),
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="user_event_nobu.xlsx"'
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
