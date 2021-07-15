import express from "express";
import authMiddleware from "../middlewares/authentication.js";
import issueController from "../controllers/issue.controller.js";

const { verifyToken } = authMiddleware;
const {
  createIssue,
  updateIssue,
  deleteIssue,
  getIssues,
  getIssueById,
  getIssuesByProjectId,
} = issueController;

const issueRoute = express.Router();

issueRoute.post("/issue", verifyToken, createIssue);
issueRoute.put("/issue/:id", verifyToken, updateIssue);
issueRoute.delete("/issue/:id", verifyToken, deleteIssue);
issueRoute.get("/issues", verifyToken, getIssues);
issueRoute.get("/issue/:id", verifyToken, getIssueById);
issueRoute.get("/issues/project/:id", verifyToken, getIssuesByProjectId);

export default issueRoute;
