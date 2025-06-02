import express from "express";
import {
  createDescription,
  deleteDescription,
  getAllDescription,
  getDescriptionById,
  updateDescription,
} from "../../controller/objectController";
import { authMiddleware } from "../../middleware/AuthMiddleware";

const router = express.Router();
router.use(authMiddleware as express.RequestHandler);

router.post("/create", createDescription);
router.get("/get-all", getAllDescription);
router.get("/get-byid/:id", getDescriptionById);
router.put("/update-byid/:id", updateDescription);
router.delete("/deleted-byid/:id", deleteDescription);

export default router;
