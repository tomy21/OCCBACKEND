import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import QRCode from "qrcode";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function sendFonnteMessageWithQr({
  noHandphone,
  message,
  ticketUrl,
}: {
  noHandphone: string;
  message: string;
  ticketUrl: string;
}) {
  // Generate QR Code dan simpan ke file sementara
  const filename = `qrcode-${uuidv4()}.png`;
  const tempFilePath = path.join(__dirname, "..", "temp", filename);

  const qrBuffer = await QRCode.toBuffer(ticketUrl, {
    type: "png",
    width: 300,
    errorCorrectionLevel: "H",
  });

  fs.writeFileSync(tempFilePath, qrBuffer);

  // Kirim ke Fonnte
  const form = new FormData();
  form.append("target", noHandphone);
  form.append("message", message);
  form.append("file", fs.createReadStream(tempFilePath)); // ⬅️ file image dikirim
  form.append("filename", "qrcode.png");

  try {
    const response = await axios.post("https://api.fonnte.com/send", form, {
      headers: {
        ...form.getHeaders(),
        Authorization: process.env.TOKEN_FONTEE || "TOKEN_KAMU_DI_SINI",
      },
    });

    // Hapus file setelah terkirim
    fs.unlinkSync(tempFilePath);

    return response.data;
  } catch (error: any) {
    fs.unlinkSync(tempFilePath); // Pastikan file tetap dihapus walaupun gagal
    throw new Error(error.response?.data?.message || error.message);
  }
}
