import initDB from "../../../helper/initDB";
import User from "../../../Modal/User";

initDB();

export default async (req, res) => {
  if (req.method == "GET") {
    getAllUserDatas(req, res);
  }
  if (req.method == "POST") {
    getUserDatas(req, res);
  }
  if (req.method == "PUT") {
    updateUserDatas(req, res);
  }
  if (req.method == "DELETE") {
    deleteUserDatas(req, res);
  }
};

const getUserDatas = async (req, res) => {
  const { id } = req.body;

  const getUserData = await User.findById({ _id: id }); // Here we are filtering the api data

  res.status(200).json(getUserData);
};

const updateUserDatas = async (req, res) => {
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
    !UserName||
    !Email||
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

const getAllUserDatas = async (req, res) => {
  const getUserData = await User.find().select(
    "UserName  Name Email Country Mobile_Number WalleteAddress"
  ); // Here we are filtering the api data

  res.status(200).json(getUserData);
};

const deleteUserDatas = async (req, res) => {
  const { id } = req.body;
  console.log("the is is =====> " + id);

  await User.findByIdAndDelete({ _id: id });
  res.json({ success: "done" });
};
