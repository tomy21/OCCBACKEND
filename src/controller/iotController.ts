import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { createResponse } from "../helper/responseCode";

const prisma = new PrismaClient();

export const closeGate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const open = status === "OPEN" ? 1 : 0;
    const data = await prisma.occGate.update({
      where: { id: parseInt(id) },
      data: { statusGate: open },
      include: {
        location: {
          select: {
            Code: true,
            Name: true,
          },
        },
      },
    });
    res.status(200).json(createResponse("GATE", "UPDATE", "Gate opened", data));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("GATE", "ERROR", "Internal server error"));
  }
};

export const arduinoPing = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    //   const open = status === "OPEN" ? 1 : 0;
    const data = await prisma.occGate.update({
      where: { id: parseInt(id) },
      data: { arduino: 1, updatedAt: new Date() },
      include: {
        location: {
          select: {
            Code: true,
            Name: true,
          },
        },
      },
    });
    res.status(200).json(createResponse("GATE", "UPDATE", "Gate active", data));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("GATE", "ERROR", "Internal server error"));
  }
};
