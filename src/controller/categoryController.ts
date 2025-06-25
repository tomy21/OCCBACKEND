import { Request, Response } from "express";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";
import { dbMain } from "../prisma/client";

export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.body;

    if (!name) {
      createResponse("CATEGORY", "ERROR", "Category name is required");
      return;
    }

    const category = await dbMain.occCategory.create({
      data: { category: name, createdBy: "admin" },
      select: { id: true, category: true },
    });
    res
      .status(201)
      .json(createResponse("CATEGORY", "CREATE", "Category created", category));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("CATEGORY", "ERROR", "Internal server error"));
  }
};

export const getAllCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { search } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    // Filter berdasarkan search (jika ada)
    const filterCondition = search
      ? {
          category: {
            contains: search as string,
          },
        }
      : {};

    // Hitung total setelah difilter
    const totalItems = await dbMain.occCategory.count({
      where: filterCondition,
    });

    // Ambil data yang sudah difilter
    const categories = await dbMain.occCategory.findMany({
      where: filterCondition,
      skip,
      take: limit,
    });

    const response = createPaginatedResponse(
      "CATEGORY",
      "READ",
      "Categories fetched",
      categories,
      page,
      limit,
      totalItems
    );

    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res
      .status(500)
      .json(createResponse("CATEGORY", "ERROR", "Internal server error"));
  }
};

export const getCategoryById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const category = await dbMain.occCategory.findUnique({
      where: { id: parseInt(id) },
    });

    if (!category) {
      res
        .status(404)
        .json(createResponse("CATEGORY", "ERROR", "Category not found"));
      return;
    }

    res
      .status(200)
      .json(createResponse("CATEGORY", "READ", "Category fetched", category));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("CATEGORY", "ERROR", "Internal server error"));
  }
};

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      res
        .status(400)
        .json(createResponse("CATEGORY", "ERROR", "Category name is required"));
      return;
    }

    const category = await dbMain.occCategory.update({
      where: { id: parseInt(id) },
      data: { category: name },
    });

    res
      .status(200)
      .json(createResponse("CATEGORY", "UPDATE", "Category updated", category));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("CATEGORY", "ERROR", "Internal server error"));
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await dbMain.occCategory.delete({ where: { id: parseInt(id) } });
    res
      .status(200)
      .json(createResponse("CATEGORY", "DELETE", "Category deleted"));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("CATEGORY", "ERROR", "Internal server error"));
  }
};
