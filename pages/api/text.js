import initDB from "../../helper/initDB";
import User from "../../Modal/User";
import cron from "node-cron";
initDB();
export default async (req, res) => {
  cron.schedule("* * * * * *", async () => {
    console.log("running a task every second");

    let list = [];

    const GetUserData = await User.find({
      Name: { $eq: "Suraj Singh" },
    }).select("Wallete");

    GetUserData.map((hit) => {
      list.push(hit._id);
    });

    for (let i = 0; i < list.length; i++) {
      const userData = await User.findById(list[i]);

      const wallete = userData.Wallete;

      await User.findByIdAndUpdate({ _id: list[i] }, { Wallete: wallete + 2 });
    }

    res.json(list);
  });
};
