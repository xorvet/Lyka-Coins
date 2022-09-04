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
    Status: {
      type: "String",
      default: "Inactive",
    },
    Wallete: {
      type: "Number",
      default: 0,
    },
    PackageId: {
      type: "String",
      default: "null",
    },
    PackageName: {
      type: "String",
      default: "null",
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.Us || mongoose.model("Us", User);
