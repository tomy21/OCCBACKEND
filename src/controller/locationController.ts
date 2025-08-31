import { Request, Response } from "express";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";
import { dbMain } from "../prisma/client";

export const getAllLocation = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const totalItems = await dbMain.occRefLocation.count();
    const locations = await dbMain.occRefLocation.findMany({
      skip,
      take: limit,
      select: {
        id: true,
        Code: true,
        Name: true,
      },
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

export const getAllLocationActive = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const totalItems = await dbMain.occRefLocation.count({
      where: { recordStatus: "ACTIVE" },
    });
    const locations = await dbMain.occRefLocation.findMany({
      where: { recordStatus: "ACTIVE" },
      skip,
      take: limit,
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

export const getLocationById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const totalItems = await dbMain.occRefLocation.count();
    const locations = await dbMain.occRefLocation.findFirst({
      where: { id: parseInt(id) },
    });
    res
      .status(200)
      .json(
        createResponse(
          "LOCATION",
          "READ",
          "Get location by id fetched",
          locations
        )
      );
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("LOCATION", "ERROR", "Internal server error"));
  }
};

export const detailGateByLocation = async (req: Request, res: Response) => {
  try {
    const { locationId } = req.params;
    console.log(locationId);
    const { search } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const gatesRaw = await dbMain.occGate.findMany({
      where: {
        id_location: parseInt(locationId),
        deletedAt: null,
      },
      include: {
        location: {
          select: {
            Code: true,
            Name: true,
          },
        },
      },
    });

    console.log("data Gate", gatesRaw);

    // Manual filtering
    const filteredGates = gatesRaw.filter((gate) => {
      const lowerSearch = (search as string)?.toLowerCase() || "";
      return (
        gate.gate.toLowerCase().includes(lowerSearch) ||
        gate.location?.Name?.toLowerCase().includes(lowerSearch)
      );
    });

    const totalItems = filteredGates.length;
    const paginatedGates = filteredGates.slice(skip, skip + limit);

    res
      .status(200)
      .json(
        createPaginatedResponse(
          "GATE",
          "READ",
          "Get all gates fetched",
          paginatedGates,
          page,
          limit,
          totalItems
        )
      );
  } catch (error) {
    console.error("Error fetching gates:", error);
    res
      .status(500)
      .json(createResponse("GATE", "ERROR", "Internal server error"));
  }
};

export const addGateLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { idLocation } = req.params;
    const { gateName } = req.body;

    if (!gateName) {
      res
        .status(400)
        .json(createResponse("GATE", "READ", "gateName is required"));
    }

    const locationId = parseInt(idLocation);
    if (isNaN(locationId)) {
      res
        .status(400)
        .json(createResponse("GATE", "READ", "Invalid location ID"));
    }

    const createGate = await dbMain.occGate.create({
      data: {
        gate: gateName,
        id_location: locationId,
      },
    });

    res
      .status(201)
      .json(createResponse("GATE", "CREATE", "Gate created", createGate));
  } catch (error) {
    console.error("Error creating gate:", error); // opsional
    res
      .status(500)
      .json(createResponse("GATE", "ERROR", "Internal server error"));
  }
};

export const updateLocationActive = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await dbMain.occRefLocation.update({
      where: { id: parseInt(id) },
      data: { recordStatus: "ACTIVE" },
      select: {
        id: true,
        Code: true,
        Name: true,
      },
    });
    res
      .status(200)
      .json(createResponse("LOCATION", "UPDATE", "Location updated"));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("LOCATION", "ERROR", "Internal server error"));
  }
};

export const updateConfigGate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      ip_lpr,
      user_lpr,
      password_lpr,
      ip_intercome,
      user_intercome,
      password_intercome,
    } = req.body;

    const gate = await dbMain.occGate.findUnique({
      where: { id: parseInt(id) },
    });

    if (!gate) {
      res.status(400).json(createResponse("GATE", "READ", "Gate not found"));
      return;
    }

    console.log(gate);

    await dbMain.occGate.update({
      where: { id: parseInt(id) },
      data: {
        gate: gate.gate,
        ip_lpr,
        user_lpr,
        password_lpr,
        ip_intercome,
        user_intercome,
        password_intercome,
      },
    });
    res.status(200).json(createResponse("GATE", "UPDATE", "Gate updated"));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("GATE", "ERROR", "Internal server error"));
  }
};

export const getGateById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const gate = await dbMain.occGate.findFirst({
      where: { id: parseInt(id) },
    });
    res
      .status(200)
      .json(
        createResponse("LOCATION", "READ", "Get location by id fetched", gate)
      );
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("LOCATION", "ERROR", "Internal server error"));
  }
};
