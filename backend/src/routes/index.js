import express from "express";
import userRoute from "./user.route.js";
import roomRoute from "./room.route.js";
import priorityRoute from "./priority.route.js";
import projectRoute from "./project.route.js";

const routes = express.Router();

routes.use("/api/v1", [userRoute, roomRoute, priorityRoute, projectRoute]);

export default routes;
