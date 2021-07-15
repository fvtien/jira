import jwt from "jsonwebtoken";
import statusCodes from "../utils/statusCodes.js";
import messages from "../utils/messages.js";
import misc from "../helpers/misc.js";
import authentication from "../validations/authentication.js";
import User from "../models/user.model.js";

const { errorResponse, returnErrorMessages, isPasswordValid } = misc;
const { signUp, login } = authentication;
const { conflict, serverError, notFound } = statusCodes;
const { conflictEmail, loginUserWrongCredentials } = messages;

const validateSignUp = async (req, res, next) => {
  const { error } = signUp(req.body);
  returnErrorMessages(error, res, next);
};

const validateLogin = async (req, res, next) => {
  const { error } = login(req.body);
  returnErrorMessages(error, res, next);
};

const isUserRegistered = async (req, res, next) => {
  const userRegistered = await User.findOne({ email: req.body.email });

  if (userRegistered) {
    return errorResponse(res, conflict, conflictEmail);
  }

  next();
};

const verifyToken = async (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return errorResponse(res, serverError, err.message);
    }

    req.userId = decoded.id;

    return next();
  });
};

const checkLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const userData = await User.findOne({ email: email });
  if (!userData) {
    return errorResponse(res, notFound, loginUserWrongCredentials);
  }

  const passwordsMatch = await isPasswordValid(password, userData.password);
  if (!passwordsMatch) {
    return errorResponse(res, notFound, loginUserWrongCredentials);
  }

  req.userData = await User.findOne({ email: req.body.email }).select(
    "-password"
  );

  return next();
};

export default {
  validateSignUp,
  validateLogin,
  isUserRegistered,
  verifyToken,
  checkLogin,
};
