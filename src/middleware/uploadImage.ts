import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Pastikan folder 'uploads' tersedia
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `image-${Date.now()}${ext}`);
  },
});

export const upload = multer({ storage });
