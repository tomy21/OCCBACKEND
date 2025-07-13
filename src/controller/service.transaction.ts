import { Request, Response } from "express";
import { sendFonnteMessage } from "../service/sendMessageWA";
import axios from "axios";
import { dbMain } from "../prisma/client";
import QRCode from "qrcode";

export const sendMessageWhatsaapp = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { numberWhatsapp, plate_number, no_transaction } = req.body;
    console.log(numberWhatsapp, plate_number, no_transaction);
    if (!numberWhatsapp || !plate_number || !no_transaction) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const message = `*No Transaksi* : ${no_transaction}\n*Plat Nomor* : ${plate_number}`;

    const result = await sendFonnteMessage({
      noHandphone: numberWhatsapp,
      message,
    });

    res.status(200).json({
      success: true,
      message: "Pesan berhasil dikirim",
      result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Gagal mengirim pesan",
      error: error.message,
    });
  }
};

export const getTransactionPOST = async (req: Request, res: Response) => {
  try {
    const { plateNumber, locationId } = req.query;
    console.log(plateNumber, locationId);
    const urlServer = await dbMain.occRefLocation.findUnique({
      where: {
        id: Number(locationId),
      },
      select: {
        UrlServer: true,
      },
    });

    const dataPOST = await axios.get(
      `${urlServer?.UrlServer}/api/get-data-post?plateNumber=${plateNumber}`
    );

    res.status(200).json({
      success: true,
      message: "Data berhasil diambil",
      data: dataPOST.data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Gagal mengirim data",
      error: error.message,
    });
  }
};

export const generateTicket = async (req: Request, res: Response) => {
  try {
    const { noTransaction, idLocation } = req.query;

    const findLocation = await dbMain.occRefLocation.findUnique({
      where: {
        id: Number(idLocation),
      },
      select: {
        TID: true,
      },
    });

    const ticket = `https://billing.skyparking.online/Ebilling?p1=${findLocation?.TID}&p2=${noTransaction}`;

    const qrCodeBuffer = await QRCode.toBuffer(ticket, {
      type: "png",
      width: 300,
      errorCorrectionLevel: "H",
    });

    res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Length": qrCodeBuffer.length,
    });
    res.end(qrCodeBuffer);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Gagal mengirim data",
      error: error.message,
    });
  }
};

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const { plateNumber, locationId, vehicleType, codeGate } = req.body;

    const urlServer = await dbMain.occRefLocation.findUnique({
      where: {
        id: Number(locationId),
      },
      select: {
        Code: true,
        UrlServer: true,
      },
    });

    const dataPOST = await axios.post(
      `${urlServer?.UrlServer}/api/create-transaction`,
      {
        locationCode: urlServer?.Code,
        vehicleType: vehicleType,
        plateNumber: plateNumber,
        codeGate: codeGate, // atau langsung `codeGate` kalau variabel sama
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({
      success: true,
      message: "Data berhasil diambil",
      data: dataPOST.data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Gagal mengirim data",
      error: error.message,
    });
  }
};
