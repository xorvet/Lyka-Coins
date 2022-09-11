import initDB from "../../../helper/initDB";
import User from "../../../Modal/User";
import Packages from "../../../Modal/Packages";
import PurchasedPackages from "../../../Modal/PurchasedPackages";
import PackageHistory from "../../../Modal/History/PackageHistory";
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
    ExpiryDate,
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

  var today = new Date();
  var date =
    today.getDate() +
    "/" +
    parseInt(today.getMonth() + 1) +
    "/" +
    parseInt(today.getFullYear() + Number(PackagePeriod));

  var todayTime = new Date();
  var time =
    parseInt(todayTime.getHours()) + ":" + parseInt(todayTime.getMinutes() + 2);

  const CreateNewPurchaseOrder = await new PurchasedPackages({
    PackageQwner: userID,
    PackageName,
    PackagePeriod,
    PackageReward,
    PackageMin,
    PackageMax,
    AmountDeposit,
    LykaTokens,
    ExpiryDate: date,
    NextDailyRewardOn: time,
  }).save();

  await User.findByIdAndUpdate({ _id: userID }, { Status: "Active" });

  const checkReferal = await User.findById(userID);

  if (checkReferal.ReferedFrom !== "null") {
    console.log("came here in not null");

    const findreferedUser = await User.findById(checkReferal.ReferedFrom);
    console.log(findreferedUser);
    const referalUserWallete = findreferedUser.Wallete;

    var NowReward = (AmountDeposit.replace("$", "") * 10) / 100;

    if (NowReward > 100) {
      NowReward = 100;
    }

    await User.findByIdAndUpdate(
      { _id: checkReferal.ReferedFrom },
      { Wallete: referalUserWallete + Number(NowReward) }
    );
  }

  await new PackageHistory({
    PackageQwner: userID,
    PackageName,
    PackagePeriod,
    PackageReward,
    PackageMin,
    PackageMax,
    AmountDeposit,
    LykaTokens,
    ExpiryDate: date,
    NextDailyRewardOn: time,
  }).save();

  res.json(CreateNewPurchaseOrder);
};
