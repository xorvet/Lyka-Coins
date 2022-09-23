import mongoose from "mongoose";

const PLWallete = mongoose.Schema(
  {
    User: {
      required: true,
      type: "String",
    },
    WithdrawAmount: {
      required: true,
      type: "String",
    },
    PercantageGot: {
      required: true,
      type: "String",
    },
    AmountGot: {
      required: true,
      type: "String",
    }
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.PLWallete ||
  mongoose.model("PLWallete", PLWallete);
