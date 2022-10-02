import initDB from "../../../helper/initDB";
import WithdrawalPercantage from "../../../Modal/DynamicValue/WithdrawalPercantage";

initDB();

export default async (req, res) => {
  const getPercantageValue = await WithdrawalPercantage.findOne();

  res.status(200).json(getPercantageValue);
};
