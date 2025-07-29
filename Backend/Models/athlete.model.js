import { mongoose } from "mongoose";

const playerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      // unique: true
    },
    profilePic: {
      type: String,
    },
    status: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
    },
    nationality: String,
    hiddenFields: [
      {
        type: String,
        enum: ["emailAddress", "physical.age"],
      },
    ],
    bio: String,
    dob: {
      type: Date,
    },
    physical: { _id: false, height: Number, weight: Number },
    positions: [
      {
        type: String,
        enum: ["striker", "midfielder", "goalkeeper", "defender", "forward"],
      },
    ],
    socials: [{ _id: false, name: String, url: String }],
    media: [
      {
        _id: false,
        type: {
          type: String,
          enum: ["video", "image"],
        },
        url: String,
        description: String,
      },
    ],
    meta: {
      _id: false,
      profileViews: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

playerSchema.index({ name: "text", positions: "text" });
playerSchema.virtual("physical.age").get(function () {
  return new Date().getFullYear() - new Date(this.dob).getFullYear();
});

export default new mongoose.model("player", playerSchema);
