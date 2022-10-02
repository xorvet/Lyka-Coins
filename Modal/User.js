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
    PackageEndOn: {
      type: "String",
      default: "null",
    },
    UserType: {
      type: "String",
      default: "User",
    },
    ReferedFrom: {
      type: "String",
      default: "null",
    },
    Date: {
      type: "String",
      default: "null",
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.Userr || mongoose.model("Userr", User);
