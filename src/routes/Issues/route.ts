import express from "express";
import {
  createIssue,
  getAllIssues,
  getIssueById,
} from "../../controller/issueController";
import { authMiddleware } from "../../middleware/AuthMiddleware";

const router = express.Router();
router.use(authMiddleware as express.RequestHandler);

router.post("/create", createIssue);
router.get("/get-all", getAllIssues);
router.get("/get-byid/:id", getIssueById);

export default router;
