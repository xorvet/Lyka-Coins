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
    },
    ReferalFromUserId:{
        type:String,
        required:true
    },
    ReferalToUserId:{
        type:String,
        required:true
    },
    ReferalFromUserName:{
        type:String,
        required:true
    },
    
    ReferalToUserName:{
        type:String,
        required:true
    },
    DepositedInPackage:{
        type:String,
        required:true
    },


},
{
  timestamps: true,
})
export default mongoose.models.ReferalHis ||  mongoose.model("ReferalHis", ReferalHistory);
