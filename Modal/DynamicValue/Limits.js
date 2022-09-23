import mongoose from "mongoose";

const Limits = mongoose.Schema({
  Maximum: {
    type: String,
    default: "null",
  },
  Minimum: {
    type: String,
    default: "null",
  },
});
export default mongoose.models.Limits || mongoose.model("Limits", Limits);
