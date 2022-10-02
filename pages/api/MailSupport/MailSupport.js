import initDB from '../../../helper/initDB'
import Mail from '../../../Modal/MailSupport/Mail'
import { v4 } from "uuid";

initDB()

export default async (req, res) => {
  if (req.method == 'GET') {
    getMailData(req, res) // this is for getting all mail data
  }
  if (req.method == 'POST') {
    postMailData(req, res) //  this is for posting new mail
  }
  if (req.method == 'PATCH') {
    postReaplyMailData(req, res) // this is for posting reply mail
  }
  if (req.method == 'PUT') {
    getTrailMail(req, res) // this is for getting specific the trail mail data
  }
}

const getMailData = async (req, res) => {
  const AllMails = await Mail.find({To:"Admin"})
  res.status(200).json(AllMails)
}

const postReaplyMailData = async (req, res) => {
  const {MailTrailId, MailSubject, MailBody, Attachment, To, From } = req.body

  if (!MailSubject || !MailBody || !To || !From) {
    return res.status(404).json('Please Provide All The Informations')
  }

  const createNewMail = await Mail({
    MailTrailId,
    MailSubject,
    MailBody,
    Attachment,
    To,
    From
  }).save()

  res.status(200).json('Mail Created Successfully')
}

const postMailData = async (req, res) => {
  const { MailSubject, MailBody, Attachment, To, From } = req.body
  var id = v4()

  if (!MailSubject || !MailBody || !To || !From) {
    return res.status(404).json('Please Provide All The Informations')
  }

  const createNewMail = await Mail({
    MailTrailId: id,
    MailSubject,
    MailBody,
    Attachment,
    To,
    From
  }).save()

  res.status(200).json('Mail Created Successfully')
}

const getTrailMail = async (req, res) => {
  const { MailTrailId } = req.body

  const findTrailData = await Mail.find({ MailTrailId })

  res.status(200).json(findTrailData)
}
