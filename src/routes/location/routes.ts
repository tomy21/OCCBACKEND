import express from "express";
import {
  detailGateByLocation,
  getAllLocation,
  getAllLocationActive,
  getLocationById,
  openGate,
  updateLocationActive,
} from "../../controller/locationController";

const router = express.Router();

// router.post("/create", createIssue);
router.get("/get-all", getAllLocation);
router.get("/get-all-location-active", getAllLocationActive);
router.get("/get-byid/:id", getLocationById);
router.get("/get-gate-by-location/:locationId", detailGateByLocation);
router.put("/update-location-active/:id", updateLocationActive);

router.put("/open-gate/:id", openGate);

export default router;
