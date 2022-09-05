import initDB from "../../../helper/initDB";
import User from "../../../Modal/User";
import Packages from "../../../Modal/Packages";




initDB()
export default async (req, res) => {
  if (req.method == "POST") {
    getPlanData(req, res);
  }
};

const getPlanData = async (req, res) => {
  const { id } = req.body;

  const userData = await User.findById({ _id: id }); // User Data

  const packageData = await Packages.findById({ _id: userData.PackageId }); // Package Data

  res.json({ userData, packageData });
};
