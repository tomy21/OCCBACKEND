import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { recognizePlate } from "../middleware/PlateRecognize";

export const detectPlate = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { camera_id, image_base64 } = req.body;
    const file = req.file as Express.Multer.File | undefined;
    console.log("[request]", req.body);
    let imageSource: string | undefined;

    if (image_base64) {
      // 📸 Jika dikirim base64
      imageSource = image_base64;
    } else if (file) {
      // 📁 Jika dikirim lewat FormData (upload file)
      imageSource = file.path;
    } else {
      res
        .status(400)
        .json({ message: "File gambar atau base64 tidak ditemukan." });
      return;
    }

    const result = await recognizePlate(String(imageSource), camera_id);

    // Hapus file jika ada (opsional)
    if (file && fs.existsSync(file.path)) {
      fs.unlinkSync(file.path);
    }

    res.status(200).json({
      camera_id,
      timestamp: new Date().toISOString(),
      result,
    });
  } catch (error: any) {
    console.error("❌ detectPlate error:", error);
    res.status(500).json({
      message: "Gagal mendeteksi plat",
      error: error?.response?.data || error.message,
    });
  }
};
