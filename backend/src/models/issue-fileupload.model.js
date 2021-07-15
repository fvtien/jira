import mongoose from "mongoose";

const issueFileUploadSchema = mongoose.Schema(
  {
    data: {
      type: Buffer,
      required: true,
    },
    contentType: {
      type: String,
      required: true,
    },
    issueId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Issue",
    },
  },
  {
    timestamps: true,
  }
);

const IssueFileUpload = mongoose.model(
  "IssueFileUpload",
  issueFileUploadSchema
);

export default IssueFileUpload;
