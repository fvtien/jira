import statusCodes from "../utils/statusCodes.js";
import messages from "../utils/messages.js";
import misc from "../helpers/misc.js";
import IssueType from "../models/issue-type.model.js";

const { successResponse, errorResponse } = misc;
const { success, created, serverError, notFound } = statusCodes;
const {
  createdSuccessful,
  updatedSuccessful,
  deletedSuccessful,
  dataList,
  dataNotFound,
} = messages;

export default class IssueTypeController {
  static createIssueType = async (req, res) => {
    try {
      const newIssueType = req.body;
      await IssueType.create(newIssueType);

      return successResponse(res, created, createdSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static updateIssueType = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      const issueType = req.body;
      await IssueType.updateOne(id, issueType);

      return successResponse(res, success, updatedSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static deleteIssueType = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      await IssueType.findOneAndDelete(id);

      return successResponse(res, success, deletedSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static getIssueTypes = async (req, res) => {
    try {
      const data = await IssueType.find();

      if (!data) {
        return errorResponse(res, notFound, dataNotFound);
      }

      return successResponse(res, success, dataList, null, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static getIssueTypeById = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      const data = await IssueType.findOne(id);

      if (!data) {
        return errorResponse(res, notFound, dataNotFound);
      }

      return successResponse(res, success, null, null, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };
}
