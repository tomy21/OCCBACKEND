import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
} from "../../controller/categoryController";
import { protect } from "../../middleware/AuthMiddleware";

const router = express.Router();
router.use(protect as express.RequestHandler);

router.post("/create", createCategory);
router.get("/get-all", getAllCategory);
router.get("/get-byid/:id", getCategoryById);
router.put("/update-byid/:id", updateCategory);
router.delete("/deleted-byid/:id", deleteCategory);

export default router;
