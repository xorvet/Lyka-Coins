import initDB from '../../../helper/initDb'
import Mail from '../../../helper/Modal/MailSupport/Mail'

initDB()

export default async (req, res) => {
  const findSentMessages = await Mail.find({ From: 'Admin' })

  res.status(200).json(findSentMessages)
}
