import { useState } from 'react'
import { Button } from '../components/elements/Button'
import Footer from '../components/elements/Footer'
import Input from '../components/elements/Input'
import Label from '../components/elements/Label'
import TitleText from '../components/elements/Title'

const AddContacts = () => {
  const [imageSrc, setImageSrc] = useState('')
  const [formData, setFormData] = useState({
    imageSrc: '',
    fname: '',
    about: '',
    email: '',
    phone: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleOnSubmit = () => {}

  const handleImg = (event) => {
    const reader = new FileReader()
    const file = event.target.files[0]

    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImageSrc(imageUrl)
    }

    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        imageSrc: reader.result,
      }))
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  return (
    <section className="bg-primary min-h-screen">
      <TitleText>Add Contacts</TitleText>
      <form className="grid grid-flow-row place-items-center gap-7">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[119px] h-[119px] overflow-hidden bg-white rounded-full shadow-main my-[28px]">
            <img
              id="imageProfile"
              src={imageSrc}
              alt={imageSrc}
              className="w-full h-full object-cover object-center "
            />
          </div>
          <input
            type="file"
            name="file-input"
            id="file"
            className="hidden"
            onChange={handleImg}
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
        <Button type="submit" onClick={handleOnSubmit()}>
          Add Contact
        </Button>
      </form>

      <Footer />
    </section>
  )
}

export default AddContacts
