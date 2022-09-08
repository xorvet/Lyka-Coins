import initDB from "../../helper/initDB";
import WithdrawalHistory from "../../Modal/History/WithdrawalHistory";

initDB();
export default async (req, res) => {
  const { id } = req.body;

  const sendData = await WithdrawalHistory.find({ UserId: id });

  res.status(200).json(sendData);
};
