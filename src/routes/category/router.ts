import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
} from "../../controller/categoryController";

const router = express.Router();

router.post("/create", createCategory);
router.get("/get-all", getAllCategory);
router.get("/get-byid/:id", getCategoryById);
router.put("/update-byid/:id", updateCategory);
router.delete("/deleted-byid/:id", deleteCategory);

export default router;
