import { useEffect, useState } from 'react'
import Footer from '../components/elements/Footer'
import { useParams } from 'react-router-dom'
import { getContactById } from '../../backend/services/contact.service'

const DetailContact = () => {
  const { id } = useParams()
  const [contact, setContact] = useState({})

  useEffect(() => {
    getContactById(id, (contact) => {
      console.log(contact)
      setContact(contact)
    })
  }, [id])

  return (
    <section className="bg-primary min-h-screen">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="w-[119px] h-[119px] bg-white mt-24 shadow-main rounded-full overflow-hidden">
          <img
            src={contact.profile_img}
            alt={contact.profile_img}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="text-center mt-5 px-[50px] w-[320px] overflow-hidden">
          <h1 className="text-2xl text-primary">About: </h1>
          <p className="text-base tracking-wide pt-3 text-primary break-words">
            awawkoaowkaowkaokwoakwoakwoakwawdadawdawdawdawawdaawawkoaowkaowkaokwoakwoakwoakwawdadawdawdawdawawdaawawkoaowkaowkaokwoakwoakwoakwawdadawdawdawdawawdaawawkoaowkaowkaokwoakwoakwoakwawdadawdawdawdawawdaawawkoaowkaowkaokwoakwoakwoakwawdadawdawdawdawawdaawawkoaowkaowkaokwoakwoakwoakwawdadawdawdawdawawda
            {/* {contact.about} */}
          </p>
        </div>

        <div className="place-items-center grid gap-14 px-5 my-14">
          <div className="relative flex items-center text-primary w-[320px]">
            <img src="/profile.svg" alt="profile" />
            <div className="px-5 pb-2 tracking-wide overflow-hidden">
              <h3>Name</h3>
              <p className="break-words text-sm">{contact.fname}</p>
            </div>
            <img
              src="/edit.svg"
              alt="edit"
              className="absolute right-0 cursor-pointer"
            />
            <hr className="w-full absolute bottom-0 " />
          </div>
          <div className="relative flex items-center text-primary w-[320px]">
            <img src="/profile.svg" alt="profile" />
            <div className="px-5 pb-2 tracking-wide overflow-hidden">
              <h3>Email</h3>
              <p className="break-words">{contact.email}</p>
            </div>
            <img
              src="/edit.svg"
              alt="edit"
              className="absolute right-0 cursor-pointer"
            />
            <hr className="w-full absolute bottom-0 " />
          </div>
          <div className="relative flex items-center text-primary w-[320px]">
            <img src="/phone.svg" alt="phone" />
            <div className="px-5 pb-2 tracking-wide overflow-hidden">
              <h3>Phone</h3>
              <p className="break-words">{contact.phone}</p>
            </div>
            <img
              src="/edit.svg"
              alt="edit"
              className="absolute right-0 cursor-pointer"
            />
            <hr className="w-full absolute bottom-0 " />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default DetailContact
