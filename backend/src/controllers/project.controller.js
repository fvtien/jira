import statusCodes from "../utils/statusCodes.js";
import messages from "../utils/messages.js";
import misc from "../helpers/misc.js";
import Project from "../models/project.model.js";

const { successResponse, errorResponse } = misc;
const { success, created, serverError, notFound } = statusCodes;
const {
  createdSuccessful,
  updatedSuccessful,
  deletedSuccessful,
  dataList,
  dataNotFound,
} = messages;

export default class ProjectController {
  static createProject = async (req, res) => {
    try {
      const newProject = req.body;
      await Project.create(newProject);

      return successResponse(res, created, createdSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static updateProject = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      const project = req.body;
      await Project.updateOne(id, project);

      return successResponse(res, success, updatedSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static deleteProject = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      await Project.findOneAndDelete(id);

      return successResponse(res, success, deletedSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static getProjects = async (req, res) => {
    try {
      const data = await Project.find();

      if (!data) {
        return errorResponse(res, notFound, dataNotFound);
      }

      return successResponse(res, success, dataList, null, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static getProjectById = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      const data = await Project.findOne(id);

      if (!data) {
        return errorResponse(res, notFound, dataNotFound);
      }

      return successResponse(res, success, null, null, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };
}
