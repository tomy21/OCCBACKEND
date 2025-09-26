import express from "express";

import { protect } from "../../middleware/AuthMiddleware";
import {
  CallByQuantity,
  getIntercomeSummary,
  getIssueStatusSummary,
  getMonthlySummary,
} from "../../controller/summaryController";

const router = express.Router();
router.use(protect as express.RequestHandler);

router.get("/count-call", getIntercomeSummary);
router.get("/issue-monthly", getMonthlySummary);
router.get("/status-monthly", getIssueStatusSummary);
router.get("/call-byquantity", CallByQuantity);

export default router;
