import express from "express";
import { arduinoPing, closeGate } from "../../controller/iotController";

const router = express.Router();

router.put("/close-gate/:id", closeGate);
router.put("/ping-status/:id", arduinoPing);

export default router;
