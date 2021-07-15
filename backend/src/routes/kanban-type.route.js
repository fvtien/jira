import express from "express";
import authMiddleware from "../middlewares/authentication.js";
import kanbanTypeController from "../controllers/kanban-type.controller.js";

const { verifyToken } = authMiddleware;
const {
  createKanbanType,
  updateKanbanType,
  deleteKanbanType,
  getKanbanTypes,
  getKanbanTypeById,
} = kanbanTypeController;

const kanbanTypeRoute = express.Router();

kanbanTypeRoute.post("/kanbantype", verifyToken, createKanbanType);
kanbanTypeRoute.put("/kanbantype/:id", verifyToken, updateKanbanType);
kanbanTypeRoute.delete("/kanbantype/:id", verifyToken, deleteKanbanType);
kanbanTypeRoute.get("/kanbantypes", verifyToken, getKanbanTypes);
kanbanTypeRoute.get("/kanbantype/:id", verifyToken, getKanbanTypeById);

export default kanbanTypeRoute;
