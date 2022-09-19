import mongoose from "mongoose";

const PurchasedPackages = mongoose.Schema(
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
     default:'null'
    },
    Hash:{
      type: "String",
     default:'null'
    }
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.PurchasedPack || mongoose.model("PurchasedPack", PurchasedPackages);