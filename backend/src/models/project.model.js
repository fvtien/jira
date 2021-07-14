import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
    unique: true,
  },
  members: {
    type: [
      {
        type: String,
        unique: true,
      },
    ],
  },
  administrators: {
    type: [
      {
        type: String,
        unique: true,
      },
    ],
  },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
