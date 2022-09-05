import mongoose from "mongoose";

const Packages = mongoose.Schema({
  PackageName: {
    required: true,
    type: "String",
  },
  PackagePeriod: {
    required: true,
    type: "String",
  },
  PackageReward: {
    required: true,
    type: "String",
  },
  PackageMin: {
    required: true,
    type: "String",
  },
  PackageMax: {
    required: true,
    type: "String",
  },
});
export default mongoose.models.Packages || mongoose.model("Packages", Packages);
