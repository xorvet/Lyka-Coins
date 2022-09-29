import User from "../../../Modal/User";
import initDB from "../../../helper/initDB"

initDB();
export default async (req, res) => {
  const { id } = req.body;

    await User.findByIdAndUpdate(
    { _id: id },
    { Status: "inactive" }
  );

  res.status(200).json("User Is Unblocked");
};
