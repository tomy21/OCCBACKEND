import express from "express";
import { arduinoPing, controlGate } from "../../controller/iotController";

const router = express.Router();

router.put("/control-gate/:id", controlGate);
router.put("/ping-status/:id", arduinoPing);
// router.put("/open-gate/:id", openGate);

export default router;
