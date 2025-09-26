import { Router } from "express";
import {
  createRole,
  getAllRole,
  updateRole,
} from "../../controller/role.controller";

const router = Router();

router.get("/", getAllRole);
router.post("/", createRole);
router.put("/", updateRole);

export default router;
