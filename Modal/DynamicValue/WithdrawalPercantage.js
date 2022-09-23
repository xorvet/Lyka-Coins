import mongoose from "mongoose";

const WithdrawalPercantage = mongoose.Schema(
  {
    WithdrawalPercantage: {
      required: true,
      type: "String",
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.WithdrawalPercantage ||
  mongoose.model("WithdrawalPercantage", WithdrawalPercantage);
