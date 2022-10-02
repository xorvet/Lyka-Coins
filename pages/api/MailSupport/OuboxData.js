import initDB from '../../../helper/initDB'
import Mail from '../../../Modal/MailSupport/Mail'

initDB()

export default async (req, res) => {
  const findSentMessages = await Mail.find({ From: 'Admin' })

  res.status(200).json(findSentMessages)
}
