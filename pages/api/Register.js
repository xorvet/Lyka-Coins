import initDB from "../../helper/initDB";
import User from "../../Modal/User";
import bcrypt from "bcrypt";
import { generateFromEmail } from "unique-username-generator";

initDB();
export default async (req, res) => {
  const { Name, Email, Country, Mobile_Number, Password ,referalCode} = req.body;
  console.log(referalCode)

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


  if (referalCode) {
    var checkReferalUser = await User.findOne({UserName:referalCode})
    if (!checkReferalUser) {
      return res.status(404).json({ error: "Referal Id Is Wrong. Please Check It Again." });
    }
    
    if (checkReferalUser.length == 0) {
      return res.status(404).json({ error: "Referal Id Is Wrong. Please Check It Again." });
      
    }else{
   
      console.log(checkReferalUser._id)
    }
    
  }
  

  const hashedPassowd = await bcrypt.hash(Password, 12);

  var randValue = Math.floor(Math.random() * 90000);

  var checkRandValue = await User.findOne({ UserName: randValue });

  while (checkRandValue !== null) {
    randValue = Math.floor(Math.random() * 90000);

    checkRandValue = await User.findOne({ UserName: randValue });
  }

  const generatedUserName = randValue;























if (referalCode) {
  
  var CreateUser = await User({
    UserName: generatedUserName,
    Name,
    Email,
    Country,
    Mobile_Number,
    Password: hashedPassowd,
    ReferedFrom:checkReferalUser._id
  }).save();
}
else{


  var CreateUser = await User({
    UserName: generatedUserName,
    Name,
    Email,
    Country,
    Mobile_Number,
    Password: hashedPassowd
  }).save();
  
}




  res.status(200).json(CreateUser);
};
