import { Request, Response } from "express";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";
import { dbMain } from "../prisma/client";

export const createDescription = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, idDescription } = req.body;

    if (!name) {
      createResponse("DESCRIPTION", "ERROR", "Description name is required");
      return;
    }

    const category = await dbMain.occCategory.findFirst({
      where: {
        id: parseInt(idDescription),
      },
    });

    if (!category) {
      res
        .status(404)
        .json(createResponse("CATEGORY", "ERROR", "Category not found"));
      return;
    }

    const idCategory = category?.id;

    const description = await dbMain.occDescription.create({
      data: {
        object: name,
        id_category: Number(idCategory),
        createdBy: "admin",
      },
      select: { id: true, object: true, category: true },
    });
    res
      .status(201)
      .json(
        createResponse(
          "DESCRIPTION",
          "CREATE",
          "Description created",
          description
        )
      );
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("DESCRIPTION", "ERROR", "Internal server error"));
  }
};

export const getAllDescription = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { search } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const filterCondition = search
      ? {
          object: {
            contains: search as string,
          },
        }
      : {};

    const totalItems = await dbMain.occDescription.count({
      where: filterCondition,
    });
    const description = await dbMain.occDescription.findMany({
      where: filterCondition,
      skip,
      take: limit,
    });

    const response = createPaginatedResponse(
      "DESCRIPTION",
      "READ",
      "Descriptions fetched",
      description,
      page,
      limit,
      totalItems
    );

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("DESCRIPTION", "ERROR", "Internal server error"));
  }
};

export const getDescriptionById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const description = await dbMain.occDescription.findMany({
      where: { id_category: parseInt(id) },
    });

    if (!description) {
      res
        .status(404)
        .json(createResponse("DESCRIPTION", "ERROR", "Description not found"));
      return;
    }

    res
      .status(200)
      .json(
        createResponse(
          "DESCRIPTION",
          "READ",
          "Description fetched",
          description
        )
      );
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("DESCRIPTION", "ERROR", "Internal server error"));
  }
};

export const updateDescription = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, idDescription } = req.body;

    if (!name) {
      res
        .status(400)
        .json(
          createResponse("DESCRIPTION", "ERROR", "Description name is required")
        );
      return;
    }

    const description = await dbMain.occDescription.update({
      where: { id: parseInt(id) },
      data: { object: name, id_category: Number(idDescription) },
    });

    res
      .status(200)
      .json(
        createResponse(
          "DESCRIPTION",
          "UPDATE",
          "Description updated",
          description
        )
      );
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("DESCRIPTION", "ERROR", "Internal server error"));
  }
};

export const deleteDescription = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await dbMain.occDescription.delete({ where: { id: parseInt(id) } });
    res
      .status(200)
      .json(createResponse("DESCRIPTION", "DELETE", "Description deleted"));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("DESCRIPTION", "ERROR", "Internal server error"));
  }
};
