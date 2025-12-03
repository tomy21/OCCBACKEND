import express from "express";
import {
  createCounter,
  getAllCounters,
  getAllCountersByLocation,
  incrementCountIn,
  incrementCountOut,
} from "../../controller/counter.controller";

const router = express.Router();

router.post("/in/:locationCode", incrementCountIn);
router.post("/out/:locationCode", incrementCountOut);
router.get("/", getAllCounters);
router.get("/bylocation", getAllCountersByLocation);
router.post("/", createCounter);

export default router;
