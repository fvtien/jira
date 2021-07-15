import fs from "fs";
import statusCodes from "../utils/statusCodes.js";
import messages from "../utils/messages.js";
import misc from "../helpers/misc.js";
import IssueFileUpload from "../models/issue-fileupload.model.js";

const { successResponse, errorResponse } = misc;
const { created, serverError } = statusCodes;
const { createdSuccessful } = messages;

export default class IssueFileUploadController {
  static uploadFile = async (req, res) => {
    try {
      const newIssueFileUpload = {
        data: fs.readFileSync(req.files.userPhoto.path),
        contentType: "image/png",
        issueId: "",
      };
      await IssueFileUpload.create(newIssueFileUpload);

      return successResponse(res, created, createdSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };
}
