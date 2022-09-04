import initDB from "../../../helper/initDB";
import User from "../../../Modal/User";

initDB();

export default async (req, res) => {
  if (req.method == "POST") {
    getUserDatas(req, res);
  }
  if (req.method == "PUT") {
    updateUserDatas(req, res);
  }
};

const getUserDatas = async (req, res) => {
  const { id } = req.body;

  const getUserData = await User.findById({ _id: id }).select(
    "UserName  Name Email Country Mobile_Number WalleteAddress"
  ); // Here we are filtering the api data

  res.status(200).json(getUserData);
};

const updateUserDatas = async (req, res) => {
  const { id, UserName, Name, Email, Country, Mobile_Number, WalleteAddress } =
    req.body;



    if (!Name||!Country||!WalleteAddress) {
     return res.status(404).json({error:"Please Fill All The Colums"})
      
    }










  const upadateData = await User.findByIdAndUpdate(
    { _id: id },
    { UserName, Name, Email, Country, Mobile_Number, WalleteAddress }
  );

  res.status(200).json({ success: "User Updated Successfully" });
};
