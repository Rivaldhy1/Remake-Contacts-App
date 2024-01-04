import { useEffect, useState } from 'react'
import Footer from '../components/elements/Footer'
import TitleText from '../components/elements/Title'
import BoxContact from '../components/fragments/BoxListContact'
import { getContact } from '../../backend/services/contact.service'

const ListContacts = () => {
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    getContact((contact) => {
      setContacts(contact.data)
    })
  })

  return (
    <section className="bg-primary min-h-screen">
      <TitleText>List Contacts</TitleText>
      <hr className="w-[340px] my-[32px] mx-auto" />
      <div className="grid place-items-center gap-6 mt-[59px]">
        {contacts.length > 0 &&
          contacts.map((contact) => (
            <BoxContact
              key={contact.contact_id}
              id={contact._id}
              src={contact.profile_img}
              fname={contact.fname}
            />
          ))}
      </div>
      <Footer />
    </section>
  )
}

export default ListContacts
