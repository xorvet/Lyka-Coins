import mongoose from "mongoose";

const ReferalPercantage = mongoose.Schema({
  value: {
    type: String,
    default: "null",
  },
});
export default mongoose.models.ReferalPercantage ||
  mongoose.model("ReferalPercantage", ReferalPercantage);
