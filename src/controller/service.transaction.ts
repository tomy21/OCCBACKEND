import { Request, Response } from "express";
import { sendFonnteMessageWithQr } from "../service/sendMessageWA";
import axios from "axios";
import { dbMain } from "../prisma/client";
import QRCode from "qrcode";
import path, { format } from "path";
import fs from "fs";
import { get } from "http";
import { formatDateTime } from "../helper/formatTanggal";

export const sendMessageWhatsaapp = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { numberWhatsapp, plate_number, idLocation, no_transaction } =
      req.body;

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
        Name: true,
      },
    });

    const ticketUrl = `https://billing.skyparking.online/Ebilling?p1=${findLocation?.TID}&p2=${no_transaction}`;
    const message = `Berikut adalah tiket parkir Anda\nNo.Transaksi: ${no_transaction}
    \nPlat Nomor: ${plate_number}
    \nLokasi: ${findLocation?.Name}`;

    const result = await sendFonnteMessageWithQr({
      noHandphone: numberWhatsapp as string,
      message,
      ticketUrl,
    });

    console.log(result);

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

export const updateTransaction = async (req: Request, res: Response) => {
  try {
    const { plateNumber } = req.params;
    const { locationId, vehicleType, codeGate } = req.body;

    const urlServer = await dbMain.occRefLocation.findUnique({
      where: {
        id: Number(locationId),
      },
      select: {
        Name: true,
        Code: true,
        UrlServer: true,
      },
    });

    const getDataPOST = await axios.get(
      `${urlServer?.UrlServer}/api/get-data-post?plateNumber=${plateNumber}`
    );
    const dataResult = getDataPOST.data.data;
    const {
      transactionNo,
      transactionStatus,
      inTime,
      duration,
      tariffParking,
      gracePeriod,
      paymentStatus,
      paymentTime,
      paymentMethod,
      issuerName,
      issuerCode,
    } = dataResult;
    console.log(dataResult);
    if (getDataPOST.data.length === 0) {
      res.status(200).json({
        success: true,
        message: "Data not found",
      });
      return;
    }

    if (getDataPOST.data.data.paymentStatus === "UNPAID") {
      res.status(404).json({
        success: true,
        message: "Transaction UNPAID",
      });
      return;
    }

    const dataPut = await axios.post(
      `${urlServer?.UrlServer}/api/update-transaction`,
      {
        transactionNo,
        transactionStatus,
        inTime,
        duration,
        tariffParking,
        vehicleType,
        codeGate,
        plateNumber,
        outTime: formatDateTime(new Date()),
        gracePeriod,
        location: `${urlServer?.Name}`,
        paymentStatus,
        paymentTime: formatDateTime(new Date()),
        paymentMethod,
        issuerName,
        issuerCode,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(dataPut.data);

    res.status(200).json({
      success: true,
      message: "Data berhasil diambil",
      data: dataPut.data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Gagal mengirim data",
      error: error.message,
    });
  }
};
