import express from "express";
import authMiddleware from "../middlewares/authentication.js";
import userController from "../controllers/user.controller.js";

const {
  validateSignUp,
  isUserRegistered,
  validateLogin,
  verifyToken,
  checkLogin,
} = authMiddleware;
const {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  loginUser,
  getUserByMail,
} = userController;

const userRoute = express.Router();

userRoute.post("/signup", validateSignUp, isUserRegistered, createUser);
userRoute.put("/user/:email", verifyToken, updateUser);
userRoute.delete("/user/:email", verifyToken, deleteUser);
userRoute.get("/users", verifyToken, getUsers);
userRoute.post("/login", validateLogin, checkLogin, loginUser);
userRoute.get("/user/:email", verifyToken, getUserByMail);

export default userRoute;
