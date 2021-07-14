import mongoose from "mongoose";

const userAvatarSchema = mongoose.Schema(
  {
    destination: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    contentType: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserAvatar = mongoose.model("UserAvatar", userAvatarSchema);

export default UserAvatar;
