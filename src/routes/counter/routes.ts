import express from "express";
import {
  createCounter,
  getAllCounters,
  incrementCountIn,
  incrementCountOut,
} from "../../controller/counter.controller";

const router = express.Router();

router.post("/in/:locationCode", incrementCountIn);
router.post("/out/:locationCode", incrementCountOut);
router.get("/", getAllCounters);
router.post("/", createCounter);

export default router;
