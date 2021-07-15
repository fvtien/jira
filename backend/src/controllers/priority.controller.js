import statusCodes from "../utils/statusCodes.js";
import messages from "../utils/messages.js";
import misc from "../helpers/misc.js";
import Priority from "../models/priority.model.js";

const { successResponse, errorResponse } = misc;
const { success, created, serverError, notFound } = statusCodes;
const {
  createdSuccessful,
  updatedSuccessful,
  deletedSuccessful,
  dataList,
  dataNotFound,
} = messages;

export default class PriorityController {
  static createPriority = async (req, res) => {
    try {
      const newPriority = req.body;
      await Priority.create(newPriority);

      return successResponse(res, created, createdSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static updatePriority = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      const priority = req.body;
      await Priority.updateOne(id, priority);

      return successResponse(res, success, updatedSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static deletePriority = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      await Priority.findOneAndDelete(id);

      return successResponse(res, success, deletedSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static getPriorities = async (req, res) => {
    try {
      const data = await Priority.find();

      if (!data) {
        return errorResponse(res, notFound, dataNotFound);
      }

      return successResponse(res, success, dataList, null, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static getPriorityById = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      const data = await Priority.findOne(id);

      if (!data) {
        return errorResponse(res, notFound, dataNotFound);
      }

      return successResponse(res, success, null, null, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };
}
