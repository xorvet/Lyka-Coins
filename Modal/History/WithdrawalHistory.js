import mongoose from "mongoose";

const WithdrawalHistory = mongoose.Schema(
  {
    UserId: {
      required: true,
      type: "String",
    },
    DeductedCoins: {
      required: true,
      type: "String",
    },
    Wallete: {
      required: true,
      type: "String",
    },
    DeductedValue: {
      required: true,
      type: "String",
    },
    Hash: {
      type: "String",
      default: "null",
    },
  },
  {
    timestamps: true,
  }
);



export default mongoose.models.WithdrawalH || mongoose.model("WithdrawalH", WithdrawalHistory);