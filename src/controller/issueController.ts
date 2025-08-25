import { Request, Response } from "express";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";
import { generateTicketCode } from "../helper/generateNoTrx";
import { dbMain } from "../prisma/client";
import { endOfDay, parse, startOfDay } from "date-fns";
import ExcelJS from "exceljs";

export const createIssue = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      idCategory,
      idGate,
      description,
      action,
      foto_in,
      foto_out,
      number_plate,
      TrxNo,
      solusi,
    } = req.body;

    if (
      !idCategory ||
      !idGate ||
      !description ||
      !action ||
      foto_in ||
      foto_out ||
      !number_plate ||
      !TrxNo ||
      !solusi
    ) {
      createResponse(
        "CATEGORY",
        "ERROR",
        `${
          idCategory ||
          idGate ||
          description ||
          action ||
          foto_in ||
          foto_out ||
          number_plate ||
          TrxNo ||
          solusi
        } name is required`
      );
      return;
    }

    const category = await dbMain.occCategory.findFirst({
      where: {
        id: parseInt(idCategory),
      },
    });

    // const descriptionData = await dbMain.occDescription.findFirst({
    //   where: {
    //     id: parseInt(description),
    //   },
    // });

    if (!category) {
      res
        .status(404)
        .json(createResponse("CATEGORY", "ERROR", "Category not found"));
      return;
    }

    const gate = await dbMain.occGate.findFirst({
      where: {
        id: parseInt(idGate),
      },
    });

    if (!gate) {
      res.status(404).json(createResponse("GATE", "ERROR", "Gate not found"));
      return;
    }

    const lokasiData = await dbMain.occRefLocation.findFirst({
      where: {
        id: gate.id_location,
      },
    });

    const noTicket = await generateTicketCode(lokasiData!.Code);
    const currentUser = req.TokeUserPayload;
    console.log(currentUser);
    const issue = await dbMain.occIssue.create({
      data: {
        ticket: noTicket,
        category: category.category,
        lokasi: lokasiData?.Name,
        description,
        gate: gate.gate,
        action,
        foto_in,
        foto_out,
        number_plate,
        TrxNo,
        solusi,
        createdBy: currentUser?.username || "system",
      },
      select: {
        id: true,
        ticket: true,
        category: true,
        gate: true,
        action: true,
        foto_in: true,
        foto_out: true,
        number_plate: true,
        solusi: true,
        TrxNo: true,
      },
    });

    res
      .status(201)
      .json(createResponse("ISSUE", "CREATE", "Category created", issue));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("ISSUE", "ERROR", "Internal server error"));
  }
};

export const getAllIssues = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { search, date, location } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const queryDate = date ? new Date(date.toString()) : "";
    const start = startOfDay(queryDate);
    const end = endOfDay(queryDate);

    // Filter kondisi pencarian jika `search` diisi
    const filterCondition = {
      lokasi: location?.toString(),
      ...(date && {
        createdAt: {
          gte: start,
          lte: end,
        },
      }),
      ...(search
        ? {
            OR: [
              { ticket: { contains: search as string } },
              { category: { contains: search as string } },
              { gate: { contains: search as string } },
            ],
          }
        : {}),
    };

    const totalItems = await dbMain.occIssue.count({
      where: filterCondition,
    });

    const issues = await dbMain.occIssue.findMany({
      where: filterCondition,
      skip,
      take: limit,
      orderBy: {
        updatedAt: "desc",
      },
    });

    const response = createPaginatedResponse(
      "ISSUE",
      "READ",
      "Issue fetched",
      issues,
      page,
      limit,
      totalItems
    );

    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching issues:", error);
    res
      .status(500)
      .json(createResponse("ISSUE", "ERROR", "Internal server error"));
  }
};

export const getIssueById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const issue = await dbMain.occIssue.findUnique({
      where: { id: parseInt(id) },
    });

    if (!issue) {
      res.status(404).json(createResponse("ISSUE", "ERROR", "Issue not found"));
      return;
    }

    res
      .status(200)
      .json(createResponse("ISSUE", "READ", "Issue fetched", issue));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("ISSUE", "ERROR", "Internal server error"));
  }
};

export const updateIssueDuration = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { duration } = req.body;

    if (!duration) {
      res
        .status(400)
        .json(createResponse("ISSUE", "ERROR", "Duration is required"));
      return;
    }

    const parsed = parse(duration, "HH:mm:ss", new Date());

    if (isNaN(parsed.getTime())) {
      res
        .status(400)
        .json(
          createResponse(
            "ISSUE",
            "ERROR",
            "Invalid duration format, expected HH:mm:ss"
          )
        );
      return;
    }

    const seconds =
      parsed.getHours() * 3600 + parsed.getMinutes() * 60 + parsed.getSeconds();

    const issue = await dbMain.occIssue.update({
      where: { id: parseInt(id) },
      data: { duration: duration },
    });

    res
      .status(200)
      .json(createResponse("ISSUE", "UPDATE", "Issue updated", issue));
  } catch (error: any) {
    if (error.code === "P2025") {
      // Prisma: record not found
      res.status(404).json(createResponse("ISSUE", "ERROR", "Issue not found"));
      return;
    }

    console.error(error);
    res
      .status(500)
      .json(createResponse("ISSUE", "ERROR", "Internal server error"));
  }
};

export const exportIssues = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      res.status(400).json({ message: "startDate dan endDate wajib diisi" });
      return;
    }

    const issues = await dbMain.occIssue.findMany({
      where: {
        createdAt: {
          gte: new Date(startDate as string),
          lte: new Date(endDate as string),
        },
      },
      orderBy: { createdAt: "asc" },
    });

    // Buat workbook Excel
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Issues");

    worksheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Ticket", key: "ticket", width: 20 },
      { header: "Category", key: "category", width: 20 },
      { header: "Lokasi", key: "lokasi", width: 20 },
      { header: "Description", key: "description", width: 30 },
      { header: "Gate", key: "gate", width: 15 },
      { header: "Action", key: "action", width: 20 },
      { header: "Number Plate", key: "number_plate", width: 20 },
      { header: "TrxNo", key: "TrxNo", width: 20 },
      { header: "Solusi", key: "solusi", width: 25 },
      { header: "Duration", key: "duration", width: 15 },
      { header: "Status", key: "status", width: 15 },
      { header: "Created By", key: "createdBy", width: 20 },
      { header: "Created At", key: "createdAt", width: 25 },
    ];

    issues.forEach((issue) => {
      worksheet.addRow({
        ...issue,
        createdAt: issue.createdAt.toISOString(),
      });
    });

    // Response sebagai file
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=occ_issues_${startDate}_${endDate}.xlsx`
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
