import { Request, Response } from "express";
import { createResponse } from "../helper/responseCode";
import { dbMain, dbSecondary } from "../prisma/client";
import { endOfDay, startOfDay } from "date-fns";

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
