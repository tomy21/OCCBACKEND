import express from "express";
import {
  generateTicket,
  getTransactionPOST,
  sendMessageWhatsaapp,
} from "../../controller/service.transaction";

const router = express.Router();

router.post("/send-whatsapp", sendMessageWhatsaapp);
router.get("/getTransactionPOST", getTransactionPOST);
router.get("/generate-ticket", generateTicket);

export default router;
