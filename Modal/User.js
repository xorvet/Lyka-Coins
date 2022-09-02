import mongoose from "mongoose";

const User = mongoose.Schema(
  {
    UserName: {
      required: true,
      type: "String",
    },
    Name: {
      required: true,
      type: "String",
    },
    Email: {
      required: true,
      type: "String",
    },
    Country: {
      required: true,
      type: "String",
    },
    Mobile_Number: {
      required: true,
      type: "String",
    },
    Password: {
      required: true,
      type: "String",
    },
    WalleteAddress: {
      type: "String",
      default: "null",
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.User || mongoose.model("User", User);
