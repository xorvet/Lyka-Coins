import initDB from "../../helper/initDB";
import User from "../../Modal/User";
import PurchasedPackages from "../../Modal/PurchasedPackages";
import cron from "node-cron";
initDB();
export default async (req, res) => {
  cron.schedule("* * * * * *", async () => {
    console.log("running a task every second");
    let list = [];
    console.log(list);

    var todayTime = new Date();
    var time = todayTime.getHours() + ":" + todayTime.getMinutes();
    var FutureTime =
      parseInt(todayTime.getHours() + 1) + ":" + todayTime.getMinutes();
    console.log(time);

    // const GetUserData = await PurchasedPackages.find({ PackageName: { $eq: "First Package" },}) // for testing purpose

    const GetUserData = await PurchasedPackages.find({
      NextDailyRewardOn: { $eq: time },
    });

    GetUserData.map((hit) => {
      list.push({ user: hit.PackageQwner, package: hit._id });
    });

    for (let i = 0; i < list.length; i++) {
      const userData = await User.findById(list[i].user);

      const wallete = userData.Wallete;

      await User.findByIdAndUpdate(
        { _id: list[i].user },
        { Wallete: wallete + 2 }
      );
      await PurchasedPackages.findByIdAndUpdate(
        { _id: list[i].package },
        { NextDailyRewardOn: FutureTime }
      );
    }

    res.json(list);
  });
};
