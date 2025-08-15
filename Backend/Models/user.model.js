import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["athlete", "scout", "admin"],
      default: "athlete",
    },
    api_key: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = new mongoose.model("user", userSchema);
export default User; 
