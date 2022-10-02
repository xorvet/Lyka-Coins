import initDB from "../../../helper/initDB";
import Mail from "../../../Modal/MailSupport/Mail";

initDB();
export default async (req, res) => {
  const { userid } = req.body;

  const findMails = await Mail.find({ To: userid });

  res.status(200).json(findMails);
};
