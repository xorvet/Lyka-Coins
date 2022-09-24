import mongoose from "mongoose";

const LykaValue =  mongoose.Schema({
  value: {
    type: String,
    default: "null",
  },
  current:{
    type: String,
    default: "null",
  }
});
export default mongoose.models.LykaVal || mongoose.model("LykaVal", LykaValue);
