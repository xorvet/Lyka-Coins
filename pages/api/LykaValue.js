import initDB from "../../helper/initDB";
import LykaValue from "../../Modal/DynamicValue/LykaValue";

initDB();

export default async (req, res) => {
  console.log("came here");
  if (req.method == "POST") {
    createValue(req, res);
  }

  if (req.method == "PUT") {
    updateValue(req, res);
  }

  if (req.method == "GET") {
    getValue(req, res);
  }
};

const createValue = async (req, res) => {
  const { value } = req.body;

  const CreateValue = await LykaValue({
    value,
  }).save();

  res.status(200).json(CreateValue);
};

const updateValue = async (req, res) => {
  const { id, value } = req.body;

  const updateValue = await LykaValue.findByIdAndUpdate({ _id: id }, { value });
  res.status(200).json(updateValue);
};

const getValue = async (req, res) => {
  const value = await LykaValue.findOne();
  res.status(200).json(value);
};
