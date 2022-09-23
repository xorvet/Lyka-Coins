import initDB from "../../helper/initDB";
import Limits from "../../Modal/DynamicValue/Limits";

initDB();

export default async (req, res) => {
  if (req.method == "GET") {
    getData(req, res);
  }
  if (req.method == "POST") {
    postData(req, res);
  }
  if (req.method == "PUT") {
    updateData(req, res);
  }
};

const getData = async (req, res) => {
  const getValue = await Limits.find();
  res.status(200).json(getValue);
};

const postData = async (req, res) => {
  const { Maximum, Minimum } = req.body;











  if (Maximum) {
    const create = await Limits({
      Maximum,
    }).save();
    return res.status(200).json(create);
  }

  if (Minimum) {
    const create = await Limits({
      Minimum,
    }).save();
    return res.status(200).json(create);
  }
};

const updateData = async (req, res) => {
  const { Maximum, Minimum, id } = req.body;

  if (Maximum) {
    const update = await Limits.findByIdAndUpdate({ _id: id }, { Maximum });

    return res.status(200).json(update);
  }

  if (Minimum) {
    const update = await Limits.findByIdAndUpdate({ _id: id }, { Minimum });

    return res.status(200).json(update);
  }
};
