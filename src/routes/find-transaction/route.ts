// src/routes/transaction.route.ts
import { Router } from "express";
import { findTransaction } from "../../controller/TransactionRealTime";

const router = Router();

router.get("/find-transaction", findTransaction);

export default router;
