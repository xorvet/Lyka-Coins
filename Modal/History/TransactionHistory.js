import mongoose from "mongoose";

const TransactionHistory = mongoose.Schema(
  {
    User: {
      required: true,
      type: "String",
    },
    Amount: {
      required: true,
      type: "String",
    },
    TransactionType: {
      required: true,
      type: "String",
    },
    Remark: {
      required: true,
      type: "String",
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.TransactionHistory ||
  mongoose.model("TransactionHistory", TransactionHistory);
