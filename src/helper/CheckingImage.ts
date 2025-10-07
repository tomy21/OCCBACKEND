import fs from "fs";
import path from "path";

/**
 * Cek apakah string berupa base64 image
 */
function isBase64Image(str: string): boolean {
  return (
    /^data:image\/[a-zA-Z]+;base64,/.test(str) || /^[A-Za-z0-9+/=]+$/.test(str)
  );
}

/**
 * Simpan file dari base64 ke folder uploads
 * @returns path file relatif (misal: "uploads/issue/foto_in_123.jpg")
 */
function saveBase64Image(base64String: string, prefix: string): string | null {
  try {
    if (!base64String) return null;

    const matches = base64String.match(/^data:(image\/\w+);base64,(.+)$/);
    const imageBuffer = Buffer.from(
      matches ? matches[2] : base64String,
      "base64"
    );
    const mimeType = matches ? matches[1] : "image/jpeg";
    const ext = mimeType.split("/")[1] || "jpg";

    const fileName = `${prefix}_${Date.now()}.${ext}`;
    const uploadDir = path.join(__dirname, "../../uploads/issue");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, fileName);
    fs.writeFileSync(filePath, imageBuffer);

    return `/issue/${fileName}`;
  } catch (err) {
    console.error("❌ Gagal menyimpan gambar:", err);
    return null;
  }
}

/**
 * Menentukan apakah nilai gambar base64 atau path
 * lalu mengembalikan path final yang disimpan di DB
 */
function processImageInput(
  imageValue: string | null,
  prefix: string
): string | null {
  if (!imageValue) return null;

  // Jika base64 → simpan sebagai file
  if (isBase64Image(imageValue)) {
    return saveBase64Image(imageValue, prefix);
  }

  // Jika bukan base64 (sudah path .jpg/.png) → langsung simpan
  return imageValue;
}

export { processImageInput, saveBase64Image, isBase64Image };
