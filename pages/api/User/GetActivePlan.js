import initDB from "../../../helper/initDB";
import PurchasedPackages from "../../../Modal/PurchasedPackages";


initDB()
export default async (req, res) => {
  if (req.method == "POST") {
    getPlanData(req, res);
  }
};

const getPlanData = async (req, res) => {
  const { id } = req.body;

  const userData = await PurchasedPackages.find({ PackageQwner: id }); // User Data


  res.json(userData);
};
