import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import statusCodes from "../utils/statusCodes.js";

const { badRequest } = statusCodes;

const successResponse = (res, statusCode, message, token, data) => {
  return res.status(statusCode).json({
    message,
    token,
    data,
  });
};

const errorResponse = (res, statusCode, error) => {
  return res.status(statusCode).json({ error });
};

const returnErrorMessages = (errors, res, next) => {
  if (errors) {
    const { details } = errors;
    const errorMessages = details
      .map(error => error.message.replace(/['"]/g, ""))
      .join(", ");
    return errorResponse(res, badRequest, errorMessages);
  }
  return next();
};

const generateToken = async data => {
  const token = jwt.sign(data, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });

  return `Bearer ${token}`;
};

const generateHashedPassword = async password => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return hashedPassword;
};

const isPasswordValid = async (password, dbPassword) => {
  const isValid = await bcrypt.compare(password, dbPassword);

  return isValid;
};

export default {
  successResponse,
  errorResponse,
  returnErrorMessages,
  generateToken,
  generateHashedPassword,
  isPasswordValid,
};
