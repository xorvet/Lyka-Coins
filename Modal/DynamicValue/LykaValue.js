import mongoose from "mongoose";

const LykaValue =  mongoose.Schema({
  value: {
    type: String,
    default: "null",
  },
});
export default mongoose.models.LykaValue ||
  mongoose.model("LykaValue", LykaValue);
