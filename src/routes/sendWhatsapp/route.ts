import express from "express";
import {
  createTransaction,
  generateTicket,
  getTransactionPOST,
  sendMessageWhatsaapp,
  updateTransaction,
} from "../../controller/service.transaction";

const router = express.Router();

router.post("/send-whatsapp", sendMessageWhatsaapp);
router.get("/getTransactionPOST", getTransactionPOST);
router.get("/generate-ticket", generateTicket);
router.post("/create-transaksi-post", createTransaction);
router.post("/update-transaksi-post/:plateNumber", updateTransaction);

export default router;
