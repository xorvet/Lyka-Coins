import mongoose from "mongoose";

const RewardHistory = mongoose.Schema(
  {
    RewardOwner: {
      required: true,
      type: "String",
    },
    PackageName: {
      required: true,
      type: "String",
    },
    DepositedAmount: {
      required: true,
      type: "String",
    },
    RewardCoin: {
      required: true,
      type: "String",
    },
    RewardTime: {
      required: true,
      type: "String",
    },
    RewardPercentage: {
      required: true,
      type: "String",
    },
    UserId: {
      required: true,
      type: "String",
    },
    UserName: {
      required: true,
      type: "String",
    },
    UserEmail: {
      required: true,
      type: "String",
    }
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.RewardHistory ||
  mongoose.model("RewardHistory", RewardHistory);
