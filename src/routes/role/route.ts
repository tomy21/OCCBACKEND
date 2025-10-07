import { Router } from "express";
import {
  createRole,
  getAllRole,
  updateRole,
} from "../../controller/role.controller";
import { logActivity } from "../../middleware/logger";

const router = Router();

router.get("/", logActivity, getAllRole);
router.post("/", logActivity, createRole);
router.put("/", logActivity, updateRole);

export default router;
