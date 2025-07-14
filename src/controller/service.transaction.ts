import { Request, Response } from "express";
import { sendFonnteMessageWithQr } from "../service/sendMessageWA";
import axios from "axios";
import { dbMain } from "../prisma/client";
import QRCode from "qrcode";
import path from "path";
import fs from "fs";

export const sendMessageWhatsaapp = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { numberWhatsapp, plate_number, idLocation, no_transaction } =
      req.body;
    console.log(numberWhatsapp, plate_number, no_transaction);
    if (!numberWhatsapp || !plate_number || !no_transaction) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const tempFolder = path.join(__dirname, "..", "temp");
    if (!fs.existsSync(tempFolder)) {
      fs.mkdirSync(tempFolder); // <-- buat folder jika belum ada
    }

    const findLocation = await dbMain.occRefLocation.findUnique({
      where: {
        id: Number(idLocation),
      },
      select: {
        TID: true,
      },
    });

    const ticketUrl = `https://billing.skyparking.online/Ebilling?p1=${findLocation?.TID}&p2=${no_transaction}`;
    const message = `Berikut adalah tiket parkir Anda\nNo.Transaksi: ${no_transaction}`;

    const result = await sendFonnteMessageWithQr({
      noHandphone: numberWhatsapp as string,
      message,
      ticketUrl,
    });

    res.status(200).json({
      success: true,
      message: "QR Code berhasil dikirim ke WhatsApp",
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
    const { noTransaction, idLocation, phone } = req.query;

    if (!noTransaction || !idLocation || !phone) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const findLocation = await dbMain.occRefLocation.findUnique({
      where: {
        id: Number(idLocation),
      },
      select: {
        TID: true,
      },
    });

    const ticketUrl = `https://billing.skyparking.online/Ebilling?p1=${findLocation?.TID}&p2=${noTransaction}`;
    const message = `Berikut adalah tiket parkir Anda\nNo.Transaksi: ${noTransaction}`;

    const result = await sendFonnteMessageWithQr({
      noHandphone: phone as string,
      message,
      ticketUrl,
    });

    res.status(200).json({
      success: true,
      message: "QR Code berhasil dikirim ke WhatsApp",
      result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
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
