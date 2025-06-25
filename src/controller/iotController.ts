import { Request, Response } from "express";
import { createResponse } from "../helper/responseCode";
import { dbMain } from "../prisma/client";

export const controlGate = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { status } = req.body;
  const open = status === "OPEN" ? 1 : 0;

  try {
    const gate = await dbMain.occGate.findUnique({
      where: { id: Number(id) },
    });

    if (gate?.arduino === 0) {
      res.status(404).json({ message: "Gate not found" });
    }

    const updatedGate = await dbMain.occGate.update({
      where: { id: Number(id) },
      data: { statusGate: open },
    });

    res.json(
      createResponse(
        "GATE",
        "UPDATE",
        `Gate updated to ${open === 0 ? "Close" : "Open"}`,
        updatedGate
      )
    );
  } catch (error: any) {
    res.status(500).json(createResponse("GATE", "ERROR", "OCC Not found"));
  }
};

export const arduinoPing = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const data = await dbMain.occGate.update({
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
