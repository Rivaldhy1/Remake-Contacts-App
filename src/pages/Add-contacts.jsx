import { useState } from "react"
import { Button } from "../components/elements/Button"
import Footer from "../components/elements/Footer"
import Input from "../components/elements/Input"
import Label from "../components/elements/Label"
import TitleText from "../components/elements/Title"

const AddContacts = () => {
  const [imageSrc, setImageSrc] = useState("")

  const handleImg = (event) => {
    const input = event.target.files[0]

    if (input) {
      const imageUrl = URL.createObjectURL(input)
      setImageSrc(imageUrl)
    }
  }

  return (
    <section className="bg-primary min-h-screen">
      <TitleText>Add Contacts</TitleText>
      <form className="grid grid-flow-row place-items-center gap-7">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[119px] h-[119px] overflow-hidden bg-white rounded-full shadow-main my-[28px]">
            <img
              src={imageSrc}
              alt=""
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
          />
        </Label>
        <Label htmlForm="email">
          Email:
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="example@gmail.com"
          />
        </Label>
        <Label htmlForm="phone">
          Phone:
          <Input id="phone" type="number" name="phone" placeholder="+62" />
        </Label>
        <Label>
          Bio:
          <Input
            id="bio"
            type="text"
            name="bio"
            placeholder="Your feeling..."
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </form>

      <Footer />
    </section>
  )
}

export default AddContacts
