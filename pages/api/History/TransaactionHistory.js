import TransactionHistory from "../../../Modal/History/TransactionHistory";
import initDB from "../../../helper/initDB";

initDB();

export default async (req, res) => {
  const { id } = req.body;

  const TransactionHis = await TransactionHistory.find({ User: id });

  res.status(200).json(TransactionHis);
};
