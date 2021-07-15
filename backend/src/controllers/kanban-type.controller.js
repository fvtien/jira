import statusCodes from "../utils/statusCodes.js";
import messages from "../utils/messages.js";
import misc from "../helpers/misc.js";
import KanbanType from "../models/kanban-type.model.js";

const { successResponse, errorResponse } = misc;
const { success, created, serverError, notFound } = statusCodes;
const {
  createdSuccessful,
  updatedSuccessful,
  deletedSuccessful,
  dataList,
  dataNotFound,
} = messages;

export default class KanbanTypeController {
  static createKanbanType = async (req, res) => {
    try {
      const newKanbanType = req.body;
      await KanbanType.create(newKanbanType);

      return successResponse(res, created, createdSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static updateKanbanType = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      const kanbanType = req.body;
      await KanbanType.updateOne(id, kanbanType);

      return successResponse(res, success, updatedSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static deleteKanbanType = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      await KanbanType.findOneAndDelete(id);

      return successResponse(res, success, deletedSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static getKanbanTypes = async (req, res) => {
    try {
      const data = await KanbanType.find().sort({ index: "asc" });

      if (!data) {
        return errorResponse(res, notFound, dataNotFound);
      }

      return successResponse(res, success, dataList, null, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static getKanbanTypeById = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      const data = await KanbanType.findOne(id);

      if (!data) {
        return errorResponse(res, notFound, dataNotFound);
      }

      return successResponse(res, success, null, null, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };
}
