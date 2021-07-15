import mongoose from "mongoose";

const issueTypeSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  icon: {
    type: String,
  },
});

const IssueType = mongoose.model("IssueType", issueTypeSchema);

export default IssueType;
