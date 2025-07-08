// src/routes/transaction.route.ts
import { Router } from "express";
import {
  createTransaction,
  findTransaction,
  updateTransaction,
} from "../../controller/TransactionRealTime";
import upload from "../../middleware/uploadImage";

const router = Router();

router.get("/find-transaction", findTransaction);
router.post(
  "/create-transaction/:id",
  upload.single("image"),
  createTransaction
);
router.put(
  "/update-transaction/:id",
  upload.single("image"),
  updateTransaction
);

export default router;
