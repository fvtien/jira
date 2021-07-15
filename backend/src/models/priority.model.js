import mongoose from "mongoose";

const prioritySchema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
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

const Priority = mongoose.model("Priority", prioritySchema);

export default Priority;
