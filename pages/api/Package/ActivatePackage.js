import initDB from "../../../helper/initDB";
import User from "../../../Modal/User";
import Packages from "../../../Modal/Packages";
import PurchasedPackages from "../../../Modal/PurchasedPackages";
import PackageHistory from "../../../Modal/History/PackageHistory";
import ReferalPercantage from "../../../Modal/DynamicValue/ReferalPercantage";
import ReferalHistory from "../../../Modal/History/ReferalHistory";

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
    Hash,
  } = req.body;

  const userdw = await User.findById(userID)

  var tod = new Date();
  var dd = String(tod.getDate()).padStart(2, "0");
  var mm = String(tod.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = tod.getFullYear();
  tod = yyyy + "-" + mm + "-" + dd;

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
    Hash: Hash,
  }).save();

  await User.findByIdAndUpdate({ _id: userID }, { Status: "Active" });

  const checkReferal = await User.findById(userID);

  if (checkReferal.ReferedFrom !== "null") {
    console.log("came here in not null");

    const findreferedUser = await User.findById(checkReferal.ReferedFrom);

    const checkPackage = await PurchasedPackages.find({
      PackageQwner: checkReferal.ReferedFrom,
    });
    if (checkPackage.length !== 0) {
      console.log(findreferedUser);
      const referalUserWallete = findreferedUser.Wallete;
      const value = await ReferalPercantage.findOne();

      var NowReward =
        (AmountDeposit.replace("$", "") * Number(value.value)) / 100;

      if (NowReward > 100) {
        NowReward = 100;
      }

      await User.findByIdAndUpdate(
        { _id: checkReferal.ReferedFrom },
        { Wallete: referalUserWallete + Number(NowReward) }
      );
      const finUse = await User.findById(userID);

      await ReferalHistory({
        Owner: findreferedUser._id,
        ReferalName: finUse.Email,
        PackageName: PackageName,
        Coins: NowReward,
        Date: todayw,
      }).save();
    }
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
    Hash: Hash,
    UserId:userdw.UserName,
    UserName:userdw.Name,
    Email:userdw.Email
  }).save();

  res.json(CreateNewPurchaseOrder);
};
