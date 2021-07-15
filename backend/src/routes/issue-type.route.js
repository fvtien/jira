import express from "express";
import authMiddleware from "../middlewares/authentication.js";
import issueTypeController from "../controllers/issue-type.controller.js";

const { verifyToken } = authMiddleware;
const {
  createIssueType,
  updateIssueType,
  deleteIssueType,
  getIssueTypes,
  getIssueTypeById,
} = issueTypeController;

const issueTypeRoute = express.Router();

issueTypeRoute.post("/issuetype", verifyToken, createIssueType);
issueTypeRoute.put("/issuetype/:id", verifyToken, updateIssueType);
issueTypeRoute.delete("/issuetype/:id", verifyToken, deleteIssueType);
issueTypeRoute.get("/issuetypes", verifyToken, getIssueTypes);
issueTypeRoute.get("/issuetype/:id", verifyToken, getIssueTypeById);

export default issueTypeRoute;
