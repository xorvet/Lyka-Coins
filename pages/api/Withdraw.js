import initDB from "../../helper/initDB";
import User from "../../Modal/User";

initDB();
export default async (req, res) => {
  const { coins, userId } = req.body;

  const findUserData = await User.findById(userId); // user details
  const userWallate = findUserData.Wallete; // user wallate
  const userWallateAddress = findUserData.WalleteAddress; // user wallate address

  if (userWallateAddress == "null") {
    return res
      .status(504)
      .json({ error: "Your Have Not Entered Your Wallate Address Yet" });
  }

  const removedValue = Number(userWallate) - Number(coins);

  const AdminUserCoins = (Number(removedValue) * 10) / 100;

  const findAdminUser = await User.findOne({ UserType: "AdminUser" });
  const adminUserWallete = findAdminUser.Wallete;

  await User.findByIdAndUpdate(
    { _id: findAdminUser._id },
    { Wallete: Number(adminUserWallete) + Number(AdminUserCoins) }
  );

  const userTotalCoins = Number(removedValue) - Number(AdminUserCoins);

  await User.findByIdAndUpdate({ _id: userId }, { Wallete: userTotalCoins });

  res.status(200).json({ success: "wallate updated" });
};
