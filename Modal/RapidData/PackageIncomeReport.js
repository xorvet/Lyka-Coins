import mongoose from "mongoose";

const PackageIncomeReport = mongoose.Schema(
  {
    PackageName: {
      default: "null",
      type: "String",
    },
    PackageAmount: {
      default: 0,
      type: "Number",
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.PackageIncomeReport || mongoose.model("PackageIncomeReport", PackageIncomeReport);
