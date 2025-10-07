import express from "express";
import {
  createTransaction,
  generateTicket,
  getTransactionPOST,
  sendMessageWhatsaapp,
  updateTransaction,
} from "../../controller/service.transaction";
import { logActivity } from "../../middleware/logger";

const router = express.Router();

router.post("/send-whatsapp", logActivity, sendMessageWhatsaapp);
router.get("/getTransactionPOST", getTransactionPOST);
router.get("/generate-ticket", generateTicket);
router.post("/create-transaksi-post", logActivity, createTransaction);
router.post(
  "/update-transaksi-post/:plateNumber",
  logActivity,
  updateTransaction
);

export default router;
