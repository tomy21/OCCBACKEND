import { Router } from "express";
import {
  getUserEvents,
  createUserEvent,
  exportUserEvents,
} from "../../controller/event.controller";

const router = Router();

router.get("/", getUserEvents);
router.post("/", createUserEvent);
router.get("/export", exportUserEvents);

export default router;
