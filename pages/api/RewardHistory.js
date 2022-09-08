import initDB from "../../helper/initDB";
import RewardHistory from "../../Modal/Reward/RewardHistory";

initDB();
export default async (req, res) => {
  const { id } = req.body;

  const sendData = await RewardHistory.find({ RewardOwner: id });

  res.status(200).json(sendData);
};
