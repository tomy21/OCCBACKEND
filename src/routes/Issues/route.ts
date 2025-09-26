import express from "express";
import {
  createIssue,
  exportIssues,
  getAllIssues,
  getIssueById,
  updateIssueDuration,
} from "../../controller/issueController";
import { protect } from "../../middleware/AuthMiddleware";

const router = express.Router();
router.use(protect as express.RequestHandler);

router.post("/create", createIssue);
router.get("/get-all", getAllIssues);
router.get("/get-byid/:id", getIssueById);
router.put("/input-duration/:id", updateIssueDuration);
router.get("/export", exportIssues);

export default router;
