import { Request, Response } from "express";
import { createResponse } from "../helper/responseCode";
import { dbMain, dbSecondary } from "../prisma/client";
import { endOfDay, startOfDay } from "date-fns";
import { recognizePlate } from "../middleware/PlateRecognize";

export const findTransaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { keyword, locationCode, date } = req.query;

    if (!keyword || typeof keyword !== "string") {
      res
        .status(400)
        .json(createResponse("TRANSACTION", "ERROR", "Keyword is required"));
    }

    const queryDate = date ? new Date(date.toString()) : new Date();
    const start = startOfDay(queryDate);
    const end = endOfDay(queryDate);

    const transaction =
      await dbSecondary.transactionParkingIntegration.findFirst({
        where: {
          LocationCode: locationCode?.toString(),
          InTime: {
            gte: start,
            lt: end,
          },
          OR: [
            { LicensePlateIn: { contains: keyword?.toString() } },
            { TransactionNo: { contains: keyword?.toString() } },
          ],
        },
        select: {
          id: true,
          TransactionNo: true,
          InTime: true,
          OutTime: true,
          VehicleType: true,
          TariffAmount: true,
          PaymentStatus: true,
          GateInCode: true,
          GateOutCode: true,
          Duration: true,
          QRTicket: true,
          LicensePlateIn: true,
          LicensePlateOut: true,
          LocationCode: true,
          IssuerID: true,
        },
      });

    if (!transaction) {
      res
        .status(200)
        .json(
          createResponse(
            "TRANSACTION",
            "READ",
            "Transaction found",
            transaction
          )
        );
    }

    let issuerInfo = null;
    let locationInfo = null;

    if (transaction!.IssuerID) {
      issuerInfo = await dbMain.refIssuer.findFirst({
        where: {
          issuerId: transaction!.IssuerID,
          RecordStatus: 1,
        },
        select: {
          issuerId: true,
          issuerName: true,
          IssuerLongName: true,
        },
      });
    }

    if (transaction!.LocationCode) {
      locationInfo = await dbMain.occRefLocation.findFirst({
        where: {
          Code: transaction!.LocationCode,
        },
        select: {
          Code: true,
          Name: true,
        },
      });
    }

    res.status(200).json(
      createResponse("TRANSACTION", "READ", "Transaction found", {
        ...transaction,
        issuerInfo,
        locationInfo,
      })
    );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(createResponse("TRANSACTION", "ERROR", "Internal server error"));
  }
};

export const createTransaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const image = req.file;
    const id = parseInt(req.params.id);

    if (!id) {
      res
        .status(400)
        .json(createResponse("TRANSACTION", "ERROR", "ID is required"));
    }

    const gate = await dbMain.occGate.findUnique({
      where: { id },
      include: {
        location: { select: { Name: true, Code: true } },
      },
    });

    const imagePath = image?.filename || null;

    let plateNumber = "-";
    if (image?.path) {
      try {
        console.log("🚗 Plate recognized:", image.path);
        const recognizeResult = await recognizePlate(image.path);
        console.log("🚗 Plate recognized:", recognizeResult);
        const hasPlate =
          Array.isArray(recognizeResult?.results) &&
          recognizeResult.results.length > 0;
        plateNumber = hasPlate ? recognizeResult.results[0].plate : "-";
      } catch (err: any) {
        console.warn("⚠️ Plate recognition failed:", err.message);
      }
    }

    const locationName = gate?.location?.Name;
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const now = new Date();
    const plus7hours = new Date(now.getTime() + 7 * 60 * 60 * 1000);

    const transaction = await dbMain.occTransaction.create({
      data: {
        Location: locationName,
        GateName: gate?.gate,
        InTime: plus7hours,
        PlateNumberIn: plateNumber.toUpperCase(),
        PathIn: imagePath || "",
      },
    });

    res.status(200).json({
      success: true,
      message: "Transaction created successfully",
      data: transaction,
    });
  } catch (error) {
    console.error("Plate Recognize error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateTransaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const image = req.file;
    const id = parseInt(req.params.id);

    if (!id) {
      res
        .status(400)
        .json(createResponse("TRANSACTION", "ERROR", "ID is required"));
      return;
    }

    const imagePath = image?.filename || null;

    let plateNumber = "-";
    if (image?.path) {
      try {
        const recognizeResult = await recognizePlate(image?.path);
        const hasPlate =
          Array.isArray(recognizeResult?.results) &&
          recognizeResult.results.length > 0;
        plateNumber = hasPlate ? recognizeResult.results[0].plate : "-";
      } catch (err: any) {
        console.warn("⚠️ Plate recognition failed:", err.message);
      }
    }

    if (!plateNumber || plateNumber === "-") {
      res
        .status(400)
        .json(createResponse("TRANSACTION", "ERROR", "Plate number not found"));
      return;
    }
    console.log("🚗 Plate recognized:", plateNumber);
    const findPlateNumber = await dbMain.occTransaction.findFirst({
      where: {
        PlateNumberIn: plateNumber.toUpperCase(),
        OutTime: null,
      },
    });

    if (!findPlateNumber) {
      res
        .status(400)
        .json(createResponse("TRANSACTION", "ERROR", "Plate number not found"));
      return;
    }

    const updatedTransaction = await dbMain.occTransaction.update({
      where: { Id: findPlateNumber.Id },
      data: {
        PathOut: imagePath || "",
        PlateNumberOut: plateNumber.toUpperCase(),
        OutTime: new Date(),
      },
    });

    res.status(200).json({
      success: true,
      message: "Transaction updated successfully",
      data: updatedTransaction,
    });
  } catch (error) {
    console.error("Plate Recognize error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
