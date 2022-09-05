import initDB from "../../../helper/initDB";
import User from "../../../Modal/User";
import Packages from "../../../Modal/Packages";

initDB();
export default async (req, res) => {
  if (req.method == "POST") {
    ActivatePackage(req, res);
  }
};

const ActivatePackage = async (req, res) => {
  const { userID, PackageId } = req.body;
  console.log(userID, PackageId)

  const getPackageDetailes = await Packages.findById({ _id: PackageId });

  //    getPackageDetailes.PackageName

  const UpdateUser = await User.findByIdAndUpdate(
    { _id: userID },
    {
      PackageId: PackageId,
      PackageName: getPackageDetailes.PackageName,
      Status: "Active",
    }
  );

  res.json(UpdateUser)
};
