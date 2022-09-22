
import initDB from "../../../helper/initDB";
import PurchasedPackages from "../../../Modal/PurchasedPackages";
import RewardHistory from "../../../Modal/Reward/RewardHistory";
import User from "../../../Modal/User";

initDB();

export default async (req, res) => {
let list = [];

var todayTime = new Date();
var time = todayTime.getUTCHours() + ":" + todayTime.getUTCMinutes();
var FutureTime =
  todayTime.getUTCHours() + ":" + parseInt(todayTime.getUTCMinutes() + 2);
console.log(time);

// const GetUserData = await PurchasedPackages.find({ PackageName: { $eq: "First Package" },}) // for testing purpose

const GetUserData = await PurchasedPackages.find();
console.log("this =>");
console.log(GetUserData);

GetUserData.map((hit) => {
  list.push({ user: hit.PackageQwner, package: hit._id });
});

for (let i = 0; i < list.length; i++) {
  const userData = await User.findById(list[i].user);
  console.log(userData);

  const wallete = userData.Wallete;

  const packagedetailes = await PurchasedPackages.findById(list[i].package);

  var investedAmount = packagedetailes.AmountDeposit.replace("$", ""); // amount desposited
  var percentageOfReward = packagedetailes.PackageReward.replace("%", ""); // percentage of reward

  var totalReward = (Number(investedAmount) * Number(percentageOfReward)) / 100; // This is the final reward

  var fin = totalReward / 8766

  await User.findByIdAndUpdate(
    { _id: list[i].user },
    { Wallete: wallete + Number(fin) }
  );
  await PurchasedPackages.findByIdAndUpdate(
    { _id: list[i].package },
    { NextDailyRewardOn: FutureTime }
  );

  const MakeRewardHistory = await new RewardHistory({
    RewardOwner: packagedetailes.PackageQwner,
    PackageName: packagedetailes.PackageName,
    DepositedAmount: investedAmount,
    RewardCoin: totalReward,
    RewardTime: time,
    RewardPercentage: percentageOfReward,
  }).save();
}
res.json("done")

}