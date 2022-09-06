import initDB from "../../../helper/initDB";
import PackageHistory from "../../../Modal/History/PackageHistory";

initDB();

export default async (req, res) => {
  const { id } = req.body;

  const getPackageHistory = await PackageHistory.find({ PackageQwner: id });

  res.status(200).json(getPackageHistory);
};
