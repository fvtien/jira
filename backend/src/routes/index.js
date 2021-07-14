import express from "express";
import userRoute from "./user.route.js";
import roomRoute from "./room.route.js";

const routes = express.Router();

routes.use("/api/v1", [userRoute, roomRoute]);

export default routes;
