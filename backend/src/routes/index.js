import express from "express";
import userRoute from "./user.route.js";

const routes = express.Router();

routes.use("/api/v1", [userRoute]);

export default routes;
