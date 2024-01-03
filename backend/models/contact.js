import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
  contact_id: {
    type: String,
    unique: true,
  },
  profile_img: {
    type: String,
  },
  fname: {
    type: String,
  },
  about: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
})

const ContactModel = mongoose.model('contact', ContactSchema)

export default ContactModel
