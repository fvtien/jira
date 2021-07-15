import express from "express";
import authMiddleware from "../middlewares/authentication.js";
import projectMiddleware from "../middlewares/project.js";
import projectController from "../controllers/project.controller.js";

const { verifyToken } = authMiddleware;
const { validateForm } = projectMiddleware;
const {
  createProject,
  updateProject,
  deleteProject,
  getProjects,
  getProjectById,
} = projectController;

const projectRoute = express.Router();

projectRoute.post("/project", verifyToken, validateForm, createProject);
projectRoute.put("/project/:id", verifyToken, updateProject);
projectRoute.delete("/project/:id", verifyToken, deleteProject);
projectRoute.get("/projects", verifyToken, getProjects);
projectRoute.get("/project/:id", verifyToken, getProjectById);

export default projectRoute;
