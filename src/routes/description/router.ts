import express from "express";
import {
  createDescription,
  deleteDescription,
  getAllDescription,
  getDescriptionById,
  updateDescription,
} from "../../controller/objectController";
import { protect } from "../../middleware/AuthMiddleware";
import { logActivity } from "../../middleware/logger";

const router = express.Router();
router.use(protect as express.RequestHandler);

router.post("/create", logActivity, createDescription);
router.get("/get-all", getAllDescription);
router.get("/get-byid/:id", getDescriptionById);
router.put("/update-byid/:id", logActivity, updateDescription);
router.delete("/deleted-byid/:id", logActivity, deleteDescription);

export default router;
