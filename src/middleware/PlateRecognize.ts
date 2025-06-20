import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import path from "path";

/**
 * Kirim gambar ke Plate Recognizer untuk mendeteksi plat nomor
 * @param imagePath - path lokal file gambar (misal: uploads/image.jpg)
 * @returns Promise yang berisi hasil deteksi plat
 */
export async function recognizePlate(imagePath: string) {
  const API_TOKEN = process.env.PLATE_RECOGNIZER_TOKEN || "YOUR_API_TOKEN";
  const API_URL = "https://api.platerecognizer.com/v1/plate-reader/";

  const form = new FormData();
  form.append("upload", fs.createReadStream(path.resolve(imagePath)));

  try {
    const response = await axios.post(API_URL, form, {
      headers: {
        ...form.getHeaders(),
        Authorization: `Token ${API_TOKEN}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error(
      "❌ Error recognizing plate:",
      error?.response?.data || error.message
    );
    throw error;
  }
}
