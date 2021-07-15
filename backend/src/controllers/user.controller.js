import statusCodes from "../utils/statusCodes.js";
import messages from "../utils/messages.js";
import misc from "../helpers/misc.js";
import User from "../models/user.model.js";

const {
  successResponse,
  errorResponse,
  generateToken,
  generateHashedPassword,
} = misc;
const { success, created, serverError, notFound } = statusCodes;
const {
  createdSuccessful,
  updatedSuccessful,
  deletedSuccessful,
  loginSuccessful,
  dataList,
  dataNotFound,
} = messages;

export default class UserController {
  static createUser = async (req, res) => {
    try {
      const newUser = req.body;
      const hashedPassword = await generateHashedPassword(newUser.password);
      newUser.password = hashedPassword;
      await User.create(newUser);

      return successResponse(res, created, createdSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static updateUser = async (req, res) => {
    try {
      const email = { email: req.params.email };
      const user = req.body;
      await User.updateOne(email, user);

      return successResponse(res, success, updatedSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static deleteUser = async (req, res) => {
    try {
      const email = { email: req.params.email };
      await User.findOneAndDelete(email);

      return successResponse(res, success, deletedSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static getUsers = async (req, res) => {
    try {
      const data = await User.find().select("-password");

      if (!data) {
        return errorResponse(res, notFound, dataNotFound);
      }

      return successResponse(res, success, dataList, null, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static loginUser = async (req, res) => {
    try {
      const userData = req.userData;
      const tokenData = {
        _id: userData.id,
        ...userData,
      };
      const token = await generateToken(tokenData);

      return successResponse(res, success, loginSuccessful, token, userData);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static getUserByMail = async (req, res) => {
    try {
      const email = { email: req.params.email };
      const data = await User.findOne(email).select("-password");

      if (!data) {
        return errorResponse(res, notFound, dataNotFound);
      }

      return successResponse(res, success, null, null, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };
}
