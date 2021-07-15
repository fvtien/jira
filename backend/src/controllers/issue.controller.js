import statusCodes from "../utils/statusCodes.js";
import messages from "../utils/messages.js";
import misc from "../helpers/misc.js";
import Issue from "../models/issue.model.js";

const { successResponse, errorResponse } = misc;
const { success, created, serverError, notFound } = statusCodes;
const {
  createdSuccessful,
  updatedSuccessful,
  deletedSuccessful,
  dataList,
  dataNotFound,
} = messages;

export default class IssueController {
  static createIssue = async (req, res) => {
    try {
      const newIssue = req.body;
      await Issue.create(newIssue);

      return successResponse(res, created, createdSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static updateIssue = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      const issue = req.body;
      await Issue.updateOne(id, issue);

      return successResponse(res, success, updatedSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static deleteIssue = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      await Issue.findOneAndDelete(id);

      return successResponse(res, success, deletedSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static getIssues = async (req, res) => {
    try {
      const data = await Issue.find().sort({ index: "asc" });

      if (!data) {
        return errorResponse(res, notFound, dataNotFound);
      }

      return successResponse(res, success, dataList, null, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static getIssueById = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      const data = await Issue.findOne(id);

      if (!data) {
        return errorResponse(res, notFound, dataNotFound);
      }

      return successResponse(res, success, null, null, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static getIssuesByProjectId = async (req, res) => {
    try {
      const data = await Issue.find({ projectId: req.params.id }).sort({
        index: "asc",
      });

      if (!data) {
        return errorResponse(res, notFound, dataNotFound);
      }

      return successResponse(res, success, dataList, null, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };
}
