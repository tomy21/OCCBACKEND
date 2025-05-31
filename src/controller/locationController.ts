import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";

const prisma = new PrismaClient();

export const getAllLocation = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const totalItems = await prisma.occRefLocation.count();
    const locations = await prisma.occRefLocation.findMany({
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

    const totalItems = await prisma.occRefLocation.count({
      where: { recordStatus: "ACTIVE" },
    });
    const locations = await prisma.occRefLocation.findMany({
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

    const totalItems = await prisma.occRefLocation.count();
    const locations = await prisma.occRefLocation.findFirst({
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
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const totalItems = await prisma.occGate.count();
    const gates = await prisma.occGate.findMany({
      where: { id_location: parseInt(locationId) },
      skip,
      take: limit,
      include: {
        location: {
          select: {
            Code: true,
            Name: true,
          },
        },
      },
    });
    res
      .status(200)
      .json(
        createPaginatedResponse(
          "GATE",
          "READ",
          "Get all gates fetched",
          gates,
          page,
          limit,
          totalItems
        )
      );
  } catch {
    res
      .status(500)
      .json(createResponse("GATE", "ERROR", "Internal server error"));
  }
};

export const updateLocationActive = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.occRefLocation.update({
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

export const openGate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const open = status === "OPEN" ? 1 : 0;
    await prisma.occGate.update({
      where: { id: parseInt(id) },
      data: { arduino: open },
    });
    res.status(200).json(createResponse("GATE", "UPDATE", "Gate opened"));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("GATE", "ERROR", "Internal server error"));
  }
};
