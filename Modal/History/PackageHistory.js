import mongoose from "mongoose";

const PackageHistory = mongoose.Schema(
  {
    PackageQwner: {
      required: true,
      type: "String",
    },
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
    AmountDeposit: {
      required: true,
      type: "String",
    },
    LykaTokens: {
      required: true,
      type: "String",
    },
    ExpiryDate: {
      required: true,
      type: "String",
    },
    NextDailyRewardOn: {
      type: "String",
      default: "null",
    },
    Hash: {
      type: "String",
      default: "null",
    },
    Date: {
      type: "String",
      default: "null",
    },
    UserId: {
      type: "String",
      default: "null",
    },
    UserName: {
      type: "String",
      default: "null",
    },
    Email: {
      type: "String",
      default: "null",
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.PackageHist ||
  mongoose.model("PackageHist", PackageHistory);
