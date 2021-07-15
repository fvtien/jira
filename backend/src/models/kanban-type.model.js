import mongoose from "mongoose";

const kanbanTypeSchema = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
    },
    className: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const KanbanType = mongoose.model("KanbanType", kanbanTypeSchema);

export default KanbanType;
