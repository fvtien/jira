import express from "express";
import authMiddleware from "../middlewares/authentication.js";
import priorityMiddleware from "../middlewares/priority.js";
import priorityController from "../controllers/priority.controller.js";

const { verifyToken } = authMiddleware;
const { validateForm } = priorityMiddleware;
const {
  createPriority,
  updatePriority,
  deletePriority,
  getPriorities,
  getPriorityById,
} = priorityController;

const priorityRoute = express.Router();

priorityRoute.post("/priority", verifyToken, validateForm, createPriority);
priorityRoute.put("/priority/:id", verifyToken, updatePriority);
priorityRoute.delete("/priority/:id", verifyToken, deletePriority);
priorityRoute.get("/priorities", verifyToken, getPriorities);
priorityRoute.get("/priority/:id", verifyToken, getPriorityById);

export default priorityRoute;
