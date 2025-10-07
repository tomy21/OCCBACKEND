import { Request, Response } from "express";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";
import { generateTicketCode } from "../helper/generateNoTrx";
import { dbMain } from "../prisma/client";
import { endOfDay, parse, startOfDay } from "date-fns";
import ExcelJS from "exceljs";
import { processImageInput } from "../helper/CheckingImage";

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
      foto_face,
      foto_lpr,
      foto_bukti_pembayaran,
      number_plate,
      TrxNo,
      solusi,
      createdAt, // ✨ tambahkan createdAt
    } = req.body;

    // Validasi input wajib
    if (
      !idCategory ||
      !idGate ||
      !description ||
      !action ||
      !number_plate ||
      !TrxNo ||
      !solusi
    ) {
      res
        .status(400)
        .json(
          createResponse("ISSUE", "ERROR", "All required fields must be filled")
        );
      return;
    }

    // 🔸 Ambil relasi kategori, gate, lokasi
    const category = await dbMain.occCategory.findFirst({
      where: { id: parseInt(idCategory) },
    });

    if (!category) {
      res
        .status(404)
        .json(createResponse("CATEGORY", "ERROR", "Category not found"));
      return;
    }

    const gate = await dbMain.occGate.findFirst({
      where: { id: parseInt(idGate) },
    });

    if (!gate) {
      res.status(404).json(createResponse("GATE", "ERROR", "Gate not found"));
      return;
    }

    const lokasiData = await dbMain.occRefLocation.findFirst({
      where: { id: gate.id_location },
    });

    if (!lokasiData) {
      res
        .status(404)
        .json(createResponse("LOCATION", "ERROR", "Location not found"));
      return;
    }

    // Generate ticket otomatis
    const ticket = await generateTicketCode(lokasiData.Code);

    // Ambil user dari JWT
    const currentUser = req.user?.id;
    const userData = await dbMain.users.findUnique({
      where: { id: currentUser },
      select: { name: true },
    });

    const gatePrefix = gate.gate?.substring(0, 2).toUpperCase();

    // 🔸 Proses semua gambar (base64 atau file)
    const savedFotoLpr = processImageInput(foto_lpr, "foto_lpr");
    const savedFotoFace = processImageInput(foto_face, "foto_face");
    const savedFotoBukti = processImageInput(
      foto_bukti_pembayaran,
      "foto_bukti_bayar"
    );

    let savedFotoIn: string | null = null;
    let savedFotoOut: string | null = null;
    let savedFotoFaceIn: string | null = null;
    let savedFotoFaceOut: string | null = null;

    if (gatePrefix === "PM") {
      savedFotoIn = savedFotoLpr;
      savedFotoFaceIn = savedFotoFace;
    } else if (gatePrefix === "PK") {
      savedFotoOut = savedFotoLpr;
      savedFotoFaceOut = savedFotoFace;
    }

    // 🔹 Buat data untuk create, jika createdAt kosong jangan ikutkan
    const issueData: any = {
      ticket,
      category: category.category,
      lokasi: lokasiData.Name,
      description,
      gate: gate.gate,
      action,
      foto_in: savedFotoIn || null,
      foto_out: savedFotoOut || null,
      foto_face_in: savedFotoFaceIn || null,
      foto_face_out: savedFotoFaceOut || null,
      foto_bukti_pembayaran: savedFotoBukti || null,
      number_plate,
      TrxNo,
      solusi,
      createdBy: userData?.name || "System",
    };

    if (createdAt && createdAt.trim() !== "") {
      issueData.createdAt = new Date(createdAt);
    }

    const issue = await dbMain.occIssue.create({
      data: issueData,
      select: {
        id: true,
        ticket: true,
        category: true,
        gate: true,
        action: true,
        foto_in: true,
        foto_out: true,
        foto_face_in: true,
        foto_face_out: true,
        foto_bukti_pembayaran: true,
        number_plate: true,
        solusi: true,
        TrxNo: true,
        createdAt: true,
      },
    });

    res
      .status(201)
      .json(
        createResponse("ISSUE", "CREATE", "Issue created successfully", issue)
      );
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

    const parsed = parse(duration, "HH:mm", new Date());

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

export const getIssuesByCategory = async (req: Request, res: Response) => {
  try {
    const { search, date, location, category } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const queryDate = date ? new Date(date.toString()) : null;
    const start = queryDate ? startOfDay(queryDate) : undefined;
    const end = queryDate ? endOfDay(queryDate) : undefined;

    // Filter kondisi pencarian + category
    const filterCondition: any = {
      deletedAt: null,
      ...(location ? { lokasi: location.toString() } : {}),
      ...(category
        ? { category: { contains: category.toString(), mode: "insensitive" } }
        : {}),
      ...(date
        ? {
            createdAt: {
              gte: start,
              lte: end,
            },
          }
        : {}),
      ...(search
        ? {
            OR: [
              { ticket: { contains: search as string, mode: "insensitive" } },
              { category: { contains: search as string, mode: "insensitive" } },
              { gate: { contains: search as string, mode: "insensitive" } },
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
      orderBy: { updatedAt: "desc" },
    });

    const response = createPaginatedResponse(
      "ISSUE",
      "READ",
      "Issues fetched by category",
      issues,
      page,
      limit,
      totalItems
    );

    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching issues by category:", error);
    res
      .status(500)
      .json(createResponse("ISSUE", "ERROR", "Internal server error"));
  }
};

export const summaryByCategory = async (req: Request, res: Response) => {
  try {
    const data = await dbMain.occIssue.groupBy({
      by: ["category"],
      where: { deletedAt: null },
      _count: { category: true },
    });

    const formatted = data.map((item) => ({
      category: item.category || "Tidak Diketahui",
      total: item._count.category,
    }));

    res.status(200).json({
      success: true,
      message: "Category summary fetched",
      data: formatted,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch category summary",
      error,
    });
  }
};

export const updateBuktiPembayaran = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const file = req.file;

    if (!file) {
      res
        .status(400)
        .json(
          createResponse(
            "ISSUE",
            "ERROR",
            "Foto bukti pembayaran wajib diupload"
          )
        );
      return;
    }

    const userData = await dbMain.users.findUnique({
      where: { id: req.user?.id || 0 },
      select: { name: true },
    });

    // simpan path/filename file ke database
    const issue = await dbMain.occIssue.update({
      where: { id: parseInt(id) },
      data: {
        foto_bukti_pembayaran: `/uploads/${file.filename}`, // path atau URL
        modifiedBy: userData?.name || "System",
      },
      select: {
        id: true,
        ticket: true,
        foto_bukti_pembayaran: true,
      },
    });

    res
      .status(200)
      .json(
        createResponse(
          "ISSUE",
          "UPDATE",
          "Bukti pembayaran (foto) berhasil diupdate",
          issue
        )
      );
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("ISSUE", "ERROR", "Internal server error"));
  }
};
