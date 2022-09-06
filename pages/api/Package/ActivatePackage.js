import initDB from "../../../helper/initDB";
import User from "../../../Modal/User";
import Packages from "../../../Modal/Packages";
import PurchasedPackages from "../../../Modal/PurchasedPackages";
import PackageHistory from "../../../Modal/History/PackageHistory"
initDB();
export default async (req, res) => {
  if (req.method == "POST") {
    ActivatePackage(req, res);
  }
};

const ActivatePackage = async (req, res) => {


  const { userID, PackageName, PackagePeriod, PackageReward, PackageMin, PackageMax, AmountDeposit, LykaTokens, ExpiryDate } = req.body;
  console.log( userID, PackageName, PackagePeriod, PackageReward, PackageMin, PackageMax, AmountDeposit, LykaTokens, ExpiryDate );



  var today = new Date();
  var date = today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ parseInt(today.getFullYear()+Number(PackagePeriod));

  var todayTime = new Date();
  var time = parseInt(todayTime.getHours()+1) + ":" + todayTime.getMinutes()






  const CreateNewPurchaseOrder = await new PurchasedPackages({
    PackageQwner: userID,
    PackageName,
    PackagePeriod,
    PackageReward,
    PackageMin,
    PackageMax,
    AmountDeposit,
    LykaTokens,
    ExpiryDate:date,
    NextDailyRewardOn:time
  }).save();




  await User.findByIdAndUpdate({_id:userID},{Status:"Active"})


  await new PackageHistory({
    PackageQwner: userID,
    PackageName,
    PackagePeriod,
    PackageReward,
    PackageMin,
    PackageMax,
    AmountDeposit,
    LykaTokens,
    ExpiryDate:date,
    NextDailyRewardOn:time
  }).save()


















  res.json(CreateNewPurchaseOrder);
};
