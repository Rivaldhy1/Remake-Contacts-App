import { useState } from 'react'
import { Button } from '../components/elements/Button'
import Footer from '../components/elements/Footer'
import Input from '../components/elements/Input'
import Label from '../components/elements/Label'
import TitleText from '../components/elements/Title'
import { useNavigate } from 'react-router-dom'
import { addContact } from '../../backend/services/contact.service'

const AddContacts = () => {
  const Navigate = useNavigate()
  const [profile_img, setprofile_img] = useState('')
  const [formData, setFormData] = useState({
    profile_img: '',
    fname: '',
    about: '',
    email: '',
    phone: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((contact) => ({
      ...contact,
      [name]: value,
    }))

    if (name === 'profile_img') {
      handleImg(event)
    }
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    try {
      await addContact(formData)
      Navigate('/list-contacts')
    } catch (error) {
      console.log(error)
      Navigate('/')
    }
  }

  const handleImg = (event) => {
    const reader = new FileReader()
    const file = event.target.files[0]

    if (file) {
      reader.onloadend = () => {
        setprofile_img(reader.result)
        setFormData((prevData) => ({
          ...prevData,
          profile_img: reader.result,
        }))
      }

      reader.readAsDataURL(file)
    }
  }

  return (
    <section className="bg-primary min-h-screen">
      <TitleText>Add Contacts</TitleText>
      <form
        className="grid grid-flow-row place-items-center gap-7"
        onSubmit={handleOnSubmit}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-[119px] h-[119px] overflow-hidden bg-white rounded-full shadow-main my-[28px]">
            <img
              id="imageProfile"
              src={profile_img}
              alt={profile_img}
              className="w-full h-full object-cover object-center "
            />
          </div>
          <input
            type="file"
            name="profile_img"
            id="file"
            className="hidden"
            onChange={handleInputChange}
          />
          <label htmlFor="file" className="bg-white p-2 cursor-pointer">
            Select file
          </label>
        </div>
        <Label htmlForm="fname">
          Name:
          <Input
            id="fname"
            type="text"
            name="fname"
            placeholder="fullname..."
            value={formData.fname}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          About:
          <Input
            id="about"
            type="text"
            name="about"
            placeholder="example: Available"
            value={formData.about}
            onChange={handleInputChange}
          />
        </Label>
        <Label htmlForm="email">
          Email:
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Label>
        <Label htmlForm="phone">
          Phone:
          <Input
            id="phone"
            type="number"
            name="phone"
            placeholder="+62"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </form>

      <Footer />
    </section>
  )
}

export default AddContacts
