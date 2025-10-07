import express from "express";
import {
  createIssue,
  exportIssues,
  getAllIssues,
  getIssueById,
  getIssuesByCategory,
  summaryByCategory,
  updateBuktiPembayaran,
  updateIssueDuration,
} from "../../controller/issueController";
import { protect } from "../../middleware/AuthMiddleware";
import { logActivity } from "../../middleware/logger";
import upload from "../../middleware/uploadImage";

const router = express.Router();
router.use(protect as express.RequestHandler);

router.post("/create", logActivity, createIssue);
router.get("/get-all", getAllIssues);
router.get("/get-byCategory", getIssuesByCategory);
router.get("/summary-by-category", summaryByCategory);
router.get("/get-byid/:id", getIssueById);
router.put("/input-duration/:id", logActivity, updateIssueDuration);
router.get("/export", exportIssues);

router.put(
  "/:id/bukti-pembayaran",
  logActivity,
  upload.single("foto_bukti_pembayaran"),
  updateBuktiPembayaran
);

export default router;
