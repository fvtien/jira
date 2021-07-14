import express from "express";
import authMiddleware from "../middlewares/authentication.js";
import roomMiddleware from "../middlewares/room.js";
import roomController from "../controllers/room.controller.js";

const { verifyToken } = authMiddleware;
const { validateForm } = roomMiddleware;
const { createRoom, updateRoom, deleteRoom, getRooms, getRoomById } =
  roomController;

const roomRoute = express.Router();

roomRoute.post("/room", verifyToken, validateForm, createRoom);
roomRoute.put("/room/:id", verifyToken, updateRoom);
roomRoute.delete("/room/:id", verifyToken, deleteRoom);
roomRoute.get("/rooms", verifyToken, getRooms);
roomRoute.get("/room/:id", verifyToken, getRoomById);

export default roomRoute;
