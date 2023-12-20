import { Button } from "../components/elements/Button"
import Footer from "../components/elements/Footer"
import Input from "../components/elements/Input"
import Label from "../components/elements/Label"
import TitleText from "../components/elements/Title"

const AddContacts = () => {
  return (
    <section className="bg-primary min-h-screen grid grid-rows-1">
      <TitleText>Add Contacts</TitleText>
      <form className="grid grid-flow-row place-items-center gap-7">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[119px] h-[119px] rounded-full bg-white shadow-main my-[28px]">
            <img src="" alt="" className="w-full object-cover" />
          </div>
          <input
            type="file"
            name="file-input"
            id="file-input"
            className="w-[95px] overflow-hidden"
          />
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
          <textarea
            name="bio"
            id="bio"
            cols="32"
            rows="5"
            className="bg-primaryInput rounded-md mt-2 p-3 text-black"
          ></textarea>
        </Label>
        <Button type="submit">Add Contact</Button>
      </form>

      <Footer />
    </section>
  )
}

export default AddContacts
