import { mongoose } from "mongoose";

const scoutSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: "text",
    },
    emailAddress: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
      type: String,
    },
    description: {
      type: String,
    },
    socials: [{ _id: false, name: String, url: String }],

    media: [
      {
        _id: false,
        type: {
          type: String,
          enum: ["video", "image"],
        },
        url: String,
        descrtiption: String,
      },
    ],
    meta: {
      _id: false,
      profileViews: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Scout = new mongoose.model("scout", scoutSchema)
export default Scout 