import initDB from "../../../helper/initDB";
import ReferalHistory from "../../../Modal/History/ReferalHistory";

initDB();

export default async (req, res) => {
  const { id } = req.body;

  const findUserData = await ReferalHistory.find({ Owner: id });

  res.status(200).json(findUserData);
};
