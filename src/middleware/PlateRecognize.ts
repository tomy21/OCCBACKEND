import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import path from "path";

/**
 * Kirim gambar ke Plate Recognizer untuk mendeteksi plat nomor
 * Bisa kirim lewat path file atau base64 string.
 *
 * @param imageSource - Path file lokal (string) atau base64 string (dimulai dengan "data:image")
 * @param cameraId - ID kamera (opsional)
 */
export async function recognizePlate(imageSource: string, cameraId?: string) {
  const API_TOKEN = process.env.PLATE_RECOGNIZER_TOKEN || "YOUR_API_TOKEN";
  const API_URL = "https://api.platerecognizer.com/v1/plate-reader/";

  const form = new FormData();

  if (imageSource.startsWith("data:image")) {
    // 📸 Jika yang dikirim base64
    const base64Data = imageSource.replace(/^data:image\/\w+;base64,/, "");
    form.append("upload", Buffer.from(base64Data, "base64"), {
      filename: `upload-${Date.now()}.jpg`,
      contentType: "image/jpeg",
    });
  } else if (fs.existsSync(imageSource)) {
    // 📁 Jika yang dikirim path file
    form.append("upload", fs.createReadStream(path.resolve(imageSource)));
  } else {
    throw new Error("❌ Gambar tidak valid: bukan base64 atau path file lokal");
  }

  if (cameraId) {
    form.append("camera_id", cameraId);
  }

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
