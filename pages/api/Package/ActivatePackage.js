import initDB from "../../../helper/initDB";
import User from "../../../Modal/User";
import Packages from "../../../Modal/Packages";
import PurchasedPackages from "../../../Modal/PurchasedPackages";

initDB();
export default async (req, res) => {
  if (req.method == "POST") {
    ActivatePackage(req, res);
  }
};

const ActivatePackage = async (req, res) => {
  const {
    userID,
    PackageName,
    PackagePeriod,
    PackageReward,
    PackageMin,
    PackageMax,
    AmountDeposit,
    LykaTokens,
    ExpiryDate
  } = req.body;
  console.log(
    userID,
    PackageName,
    PackagePeriod,
    PackageReward,
    PackageMin,
    PackageMax,
    AmountDeposit,
    LykaTokens,
    ExpiryDate
  );

  const CreateNewPurchaseOrder = await new PurchasedPackages({
    PackageQwner: userID,
    PackageName,
    PackagePeriod,
    PackageReward,
    PackageMin,
    PackageMax,
    AmountDeposit,
    LykaTokens,
    ExpiryDate:"05/09/2023",
    NextDailyRewardOn:"12:30 PM"
  }).save();




  await User.findByIdAndUpdate({_id:userID},{Status:"Active"})

  res.json(CreateNewPurchaseOrder);
};
