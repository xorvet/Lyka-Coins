import initDB from "../../helper/initDB";
import User from "../../Modal/User";
import WithdrawalHistory from "../../Modal/History/WithdrawalHistory";
import LykaValue from "../../Modal/DynamicValue/LykaValue";

initDB();
export default async (req, res) => {
  const { coins, userId ,Hash} = req.body;
  console.log(Hash)

  const findUserData = await User.findById(userId); // user details
  const userWallate = findUserData.Wallete; // user wallate
  const userWallateAddress = findUserData.WalleteAddress; // user wallate address

  if (userWallateAddress == "null") {
    return res
      .status(504)
      .json({ error: "Your Have Not Entered Your Wallate Address Yet" });
  }
  const newval = await LykaValue.findOne()

  var letvalue = Number(coins) * Number(newval.value)

  const removedValue = Number(userWallate) - Number(letvalue);

  const AdminUserCoins = (Number(removedValue) * 10) / 100;

  const findAdminUser = await User.findOne({ UserType: "AdminUser" });

  const adminUserWallete = findAdminUser.Wallete;

  await User.findByIdAndUpdate(
    { _id: findAdminUser._id },
    { Wallete: Number(adminUserWallete) + Number(AdminUserCoins) }
  );

  const userTotalCoins = Number(removedValue) - Number(AdminUserCoins);

  await User.findByIdAndUpdate({ _id: userId }, { Wallete: userTotalCoins });

  // create history

  const WithdrawHistory = await new WithdrawalHistory({
    UserId:userId,
    DeductedCoins:coins,
    Wallete:userWallateAddress,
    DeductedValue:AdminUserCoins,
    Hash:Hash
  }).save();

  res.status(200).json({ success: "wallate updated" });
};
