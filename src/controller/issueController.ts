import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";
import { generateTicketCode } from "../helper/generateNoTrx";

const prisma = new PrismaClient();

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
    } = req.body;

    if (
      !idCategory ||
      !idGate ||
      !description ||
      !action ||
      foto_in ||
      foto_out ||
      !number_plate ||
      !TrxNo
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
          TrxNo
        } name is required`
      );
      return;
    }

    const category = await prisma.occCategory.findFirst({
      where: {
        id: parseInt(idCategory),
      },
    });

    if (!category) {
      res
        .status(404)
        .json(createResponse("CATEGORY", "ERROR", "Category not found"));
      return;
    }

    const gate = await prisma.occGate.findFirst({
      where: {
        id: parseInt(idGate),
      },
    });

    if (!gate) {
      res.status(404).json(createResponse("GATE", "ERROR", "Gate not found"));
      return;
    }

    const lokasiData = await prisma.occRefLocation.findFirst({
      where: {
        id: gate.id_location,
      },
    });

    const noTicket = await generateTicketCode(lokasiData!.Code);

    const issue = await prisma.occIssue.create({
      data: {
        ticket: noTicket,
        category: category.category,
        description,
        gate: gate.gate,
        action,
        foto_in,
        foto_out,
        number_plate,
        TrxNo,
        createdBy: "admin",
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
    const { search } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    // Filter kondisi pencarian jika `search` diisi
    const filterCondition = search
      ? {
          OR: [
            { ticket: { contains: search as string } },
            { category: { contains: search as string } },
            { lokasi: { contains: search as string } },
            { gate: { contains: search as string } },
          ],
        }
      : {};

    const totalItems = await prisma.occIssue.count({
      where: filterCondition,
    });

    const issues = await prisma.occIssue.findMany({
      where: filterCondition,
      skip,
      take: limit,
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
    const issue = await prisma.occIssue.findUnique({
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
