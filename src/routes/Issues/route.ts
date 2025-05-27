import express from "express";
import {
  createIssue,
  getAllIssues,
  getIssueById,
} from "../../controller/issueController";

const router = express.Router();

router.post("/create", createIssue);
router.get("/get-all", getAllIssues);
router.get("/get-byid/:id", getIssueById);

export default router;
