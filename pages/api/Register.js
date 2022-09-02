import initDB from "../../helper/initDB";
import User from "../../Modal/User";
import bcrypt from "bcrypt";
import { generateFromEmail} from "unique-username-generator";

initDB();
export default async (req, res) => {
  const { Name, Email, Country, Mobile_Number, Password } = req.body;

  if (!Name || !Email || !Country || !Mobile_Number || !Password) {
    return res
      .status(404)
      .json({ error: "You Have Not Provided All The Informations" });
  }
  const user = await User.findOne({ Email });
  const number = await User.findOne({ Mobile_Number });

  if (user) {
    return res
      .status(422)
      .json({ error: "This Email Already Exist Please Choose Another One" });
  }
  if (number) {
    return res
      .status(422)
      .json({ error: "This Number Already Exist Please Choose Another One" });
  }

  const hashedPassowd = await bcrypt.hash(Password, 12);

  const generatedUserName = generateFromEmail(Email, 3);

  const CreateUser = await User({
    UserName: generatedUserName,
    Name,
    Email,
    Country,
    Mobile_Number,
    Password: hashedPassowd,
  }).save();

  res.status(200).json(CreateUser);
};
