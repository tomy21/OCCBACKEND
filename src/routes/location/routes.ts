import express from "express";
import {
  addGateLocation,
  detailGateByLocation,
  getAllLocation,
  getAllLocationActive,
  getGateById,
  getLocationById,
  updateConfigGate,
  updateLocationActive,
} from "../../controller/locationController";
import { logActivity } from "../../middleware/logger";

const router = express.Router();

// router.post("/create", createIssue);
router.get("/get-all", getAllLocation);
router.get("/get-all-location-active", getAllLocationActive);
router.get("/get-byid/:id", getLocationById);
router.get("/get-gate-by-location/:locationId", detailGateByLocation);
router.put("/update-location-active/:id", logActivity, updateLocationActive);
router.post("/create-data/:idLocation", logActivity, addGateLocation);
router.put("/update-gate/:id", logActivity, updateConfigGate);
router.get("/get-gate-byid/:id", getGateById);

export default router;
