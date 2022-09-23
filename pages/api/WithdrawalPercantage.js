import initDB from "../../helper/initDB";
import WithdrawalPercantage from "../../Modal/DynamicValue/WithdrawalPercantage";

initDB();
export default async (req, res) => {
  if (req.method == "POST") {
    createIt(req, res);
  }

  if (req.method == "PUT") {
    updateIt(req, res);
  }
  if (req.method == "GET") {
    getIt(req, res);
  }
};

const createIt = async (req, res) => {
  const { Withdrawal } = req.body;

  const Create = await WithdrawalPercantage({
    WithdrawalPercantage: Withdrawal,
  }).save();
  res.status(200).json(Create);
};

const updateIt = async (req, res) => {
  const { id, Withdrawal } = req.body;

  const updateIt = await WithdrawalPercantage.findByIdAndUpdate(
    { _id: id },
    { WithdrawalPercantage: Withdrawal }
  );

  res.status(200).json(updateIt);
};

const getIt = async (req, res) => {
  const val = await WithdrawalPercantage.find();
  res.status(200).json(val);
};
