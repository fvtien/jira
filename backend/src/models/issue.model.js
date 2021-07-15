import mongoose from "mongoose";

const issueSchema = mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Project",
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    issueTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "IssueType",
    },
    assigneeId: {
      type: String,
    },
    priorityId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Priority",
    },
    epicId: {
      type: String,
    },
    summary: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    statusId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "KanbanType",
    },
    index: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Issue = mongoose.model("Issue", issueSchema);

export default Issue;
