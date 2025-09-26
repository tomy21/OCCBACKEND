import { Request, Response } from "express";
import { dbMain, PrismaMain } from "../prisma/client";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";

export const getAllRole = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const search = (req.query.search as string) || "";

    const whereClause: PrismaMain.RoleWhereInput = search
      ? {
          OR: [{ name: { contains: search, mode: "insensitive" } }],
        }
      : {};

    const totalItems = await dbMain.role.count({
      where: whereClause,
    });

    const locations = await dbMain.role.findMany({
      skip,
      take: limit,
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { updatedAt: "asc" },
    });

    res
      .status(200)
      .json(
        createPaginatedResponse(
          "LOCATION",
          "READ",
          "Get all locations fetched",
          locations,
          page,
          limit,
          totalItems
        )
      );
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("LOCATION", "ERROR", "Internal server error"));
  }
};

export const createRole = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.body;

    if (!name) {
      res
        .status(400)
        .json(createResponse("ROLE", "READ", "gateName is required"));
    }

    const createRole = await dbMain.role.create({
      data: {
        name: name,
      },
    });

    res
      .status(201)
      .json(createResponse("ROLE", "CREATE", "role created", createRole));
  } catch (error) {
    console.error("Error creating gate:", error); // opsional
    res.status(500).json(createResponse("ROLE", "ERROR", error as string));
  }
};

export const updateRole = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      res.status(400).json(createResponse("ROLE", "READ", "Name is required"));
    }

    const gate = await dbMain.role.findUnique({
      where: { id: parseInt(id) },
    });

    if (!gate) {
      res.status(400).json(createResponse("ROLE", "READ", "Name not found"));
      return;
    }

    console.log(gate);

    await dbMain.role.update({
      where: { id: parseInt(id) },
      data: {
        name: name,
      },
    });
    res.status(200).json(createResponse("ROLE", "UPDATE", "ROLE updated"));
  } catch (error) {
    console.error(error);
    res.status(500).json(createResponse("ROLE", "ERROR", error as string));
  }
};
