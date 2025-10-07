import express from "express";
import upload from "../../middleware/uploadImage";
import { detectPlate } from "../../controller/plateRecognize.controller";

const router = express.Router();

// POST /api/plate-recognize
router.post("/", upload.single("image"), detectPlate);

export default router;
