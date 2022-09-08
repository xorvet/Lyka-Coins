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
  },
  {
    timestamps: true,
  }
);



export default mongoose.models.WithdrawalHis || mongoose.model("WithdrawalHis", WithdrawalHistory);