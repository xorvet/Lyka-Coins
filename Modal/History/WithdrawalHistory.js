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
    Date: {
      type: "String",
      default: "null",
    },
    MemberId: {
      type: "String",
      default: "null",
    },
    MemberName: {
      type: "String",
      default: "null",
    },
    AmountUSDT: {
      type: "String",
      default: "null",
    },
    Charges: {
      type: "String",
      default: "null",
    },
    PayableUSDT: {
      type: "String",
      default: "null",
    },
    PayableLyka: {
      type: "String",
      default: "null",
    }
  },
  {
    timestamps: true,
  }
);



export default mongoose.models.Withd || mongoose.model("Withd", WithdrawalHistory);