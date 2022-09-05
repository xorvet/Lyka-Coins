import initDB from "../../../helper/initDB";
import Packages from "../../../Modal/Packages";

initDB();

export default async (req, res) => {
  if (req.method == "GET") {
    getAllPackageDatas(req, res);
  }
  if (req.method == "POST") {
    getPackageDatas(req, res);
  }
  if (req.method == "PUT") {
    updatePackageDatas(req, res);
  }
  if (req.method == "DELETE") {
    deletePackageDatas(req, res);
  }
  if (req.method == "PATCH") {
    createPackageDatas(req, res);
  }
};

const getPackageDatas = async (req, res) => {
  const { id } = req.body;

  const getUserData = await Packages.findById({ _id: id }); // Here we are filtering the api data

  res.status(200).json(getUserData);
};

const updatePackageDatas = async (req, res) => {
  const {
    id,
    UserName,
    Name,
    Email,
    Country,
    Mobile_Number,
    WalleteAddress,
    password,
    Status,
    wallete,
    Package,
    packageId,
  } = req.body;

  if (
    !Name ||
    !Country ||
    !WalleteAddress ||
    !password ||
    !Status ||
    !wallete ||
    !Package ||
    !packageId ||
    !UserName ||
    !Email ||
    !Mobile_Number
  ) {
    return res.status(404).json({ error: "Please Fill All The Colums" });
  }

  const upadateData = await User.findByIdAndUpdate(
    { _id: id },
    { UserName, Name, Email, Country, Mobile_Number, WalleteAddress }
  );

  res.status(200).json({ success: "User Updated Successfully" });
};

const getAllPackageDatas = async (req, res) => {
  const getUserData = await Packages.find(); // Here we are filtering the api data

  res.status(200).json(getUserData);
};

const deletePackageDatas = async (req, res) => {
  const { id } = req.body;
  console.log("the is is =====> " + id);

  await Packages.findByIdAndDelete({ _id: id });
  res.json({ success: "done" });
};

const createPackageDatas = async (req, res) => {
  const { PackageName, PackagePeriod, PackageReward, PackageMin, PackageMax } =
    req.body;
  if (
    !PackageName ||
    !PackagePeriod ||
    !PackageReward ||
    !PackageMin ||
    !PackageMax
  ) {
    return res.status(404).json({ error: "Please Enter All Informations" });
  }

  const createPackage = await Packages({
    PackageName,
    PackagePeriod,
    PackageReward,
    PackageMin,
    PackageMax,
  }).save();

  res.status(200).json(createPackage);
};
