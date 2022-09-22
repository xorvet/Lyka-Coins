import mongoose from "mongoose";


const ReferalHistory = mongoose.Schema({
    Owner:{
        type:String,
        required:true
    },
    ReferalName:{
        type:String,
        required:true
    },
    PackageName:{
        type:String,
        required:true
    },
    Coins:{
        type:String,
        required:true
    }

},
{
  timestamps: true,
})
export default mongoose.models.ReferalHistory ||  mongoose.model("ReferalHistory", ReferalHistory);
