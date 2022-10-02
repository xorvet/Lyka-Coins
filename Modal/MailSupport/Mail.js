import mongoose from 'mongoose'

const Mail = mongoose.Schema({
    MailTrailId:{
        required: true,
        type: "String",
    },
    MailSubject:{
        required: true,
        type: "String",
    },
    MailBody:{
        required: true,
        type: "String",
    },
    Attachment:{
        default:"null",
        type: "String",
    },
    To:{
        required: true,
        type: "String",
    },
    From:{
        required: true,
        type: "String",
    },
    ReadByAdmin:{
        default:"false",
        type: "String",
    },
    ReadByUser:{
        default:"false",
        type: "String",
    },
  },
  {
    timestamps: true
  }
)

export default mongoose.models.Mail || mongoose.model("Mail", Mail);
