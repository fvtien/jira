import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    isEdited: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    autoIndex: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
