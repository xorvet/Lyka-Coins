import initDB from "../../../../helper/initDB";
import User from "../../../../Modal/User";
import TransactionHistory from "../../../../Modal/History/TransactionHistory";

initDB();
export default async (req, res) => {
  const { TransactionType, TransactionValue, Remark, Id } = req.body;
  console.log(TransactionType, TransactionValue, Remark, Id)

//   if (!TransactionType || !TransactionValue || !Remark || !Id) {
//     return res
//       .status(404)
//       .json({ error: "Please Provide All The Credentials" });
//   }

  if (TransactionType == 0) {


    const UserData = await User.findById(Id)
    const UserWallete = UserData.Wallete
    const UpdateUserWallete = await User.findByIdAndUpdate({_id:Id},{Wallete:Number(UserWallete)+Number(TransactionValue)})


    const CreateHisory = await new TransactionHistory({
        TransactionType: TransactionType,
      Amount: TransactionValue,
      Remark: Remark,
      User: Id
    }).save();
    res.status(200).json({success:"Transaction Done"})



  } else if (TransactionType == 1) {



    const UserData = await User.findById(Id)
    const UserWallete = UserData.Wallete
    const UpdateUserWallete = await User.findByIdAndUpdate({_id:Id},{Wallete:Number(UserWallete)-Number(TransactionValue)})


    const CreateHisory = await new TransactionHistory({
        TransactionType: TransactionType,
      Amount: TransactionValue,
      Remark: Remark,
      User: Id
    }).save();
    res.status(200).json({success:"Transaction Done"})






  }
};
