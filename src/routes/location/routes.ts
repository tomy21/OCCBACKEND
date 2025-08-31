import express from "express";
import {
  addGateLocation,
  detailGateByLocation,
  getAllLocation,
  getAllLocationActive,
  getLocationById,
  updateConfigGate,
  updateLocationActive,
} from "../../controller/locationController";

const router = express.Router();

// router.post("/create", createIssue);
router.get("/get-all", getAllLocation);
router.get("/get-all-location-active", getAllLocationActive);
router.get("/get-byid/:id", getLocationById);
router.get("/get-gate-by-location/:locationId", detailGateByLocation);
router.put("/update-location-active/:id", updateLocationActive);
router.post("/create-data/:idLocation", addGateLocation);
router.put("/update-gate/:id", updateConfigGate);

export default router;
