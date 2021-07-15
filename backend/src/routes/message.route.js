import express from "express";
import authMiddleware from "../middlewares/authentication.js";
import messageController from "../controllers/message.controller.js";

const { verifyToken } = authMiddleware;
const {
  createMessage,
  updateMessage,
  deleteMessage,
  getMessages,
  getMessageById,
} = messageController;

const messageRoute = express.Router();

messageRoute.post("/message", verifyToken, createMessage);
messageRoute.put("/message/:id", verifyToken, updateMessage);
messageRoute.delete("/message/:id", verifyToken, deleteMessage);
messageRoute.get("/messages/:id", verifyToken, getMessages);
messageRoute.get("/message/:id", verifyToken, getMessageById);

export default messageRoute;
