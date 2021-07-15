import express from "express";
import authMiddleware from "../middlewares/authentication.js";
import issueFileUploadController from "../controllers/issue-fileupload.controller.js";

const { verifyToken } = authMiddleware;
const { uploadFile } = issueFileUploadController;

const issueFileUploadRoute = express.Router();

issueFileUploadRoute.post("/issuefileupload", verifyToken, uploadFile);

export default issueFileUploadRoute;
