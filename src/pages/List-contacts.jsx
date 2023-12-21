import Footer from "../components/elements/Footer"
import TitleText from "../components/elements/Title"
import BoxContact from "../components/fragments/BoxListContact"

const ListContacts = () => {
  return (
    <section className="bg-primary min-h-screen">
      <TitleText>List Contacts</TitleText>
      <hr className="w-[340px] my-[32px] mx-auto" />
      <div className="grid place-items-center gap-6 mt-[59px]">
        <BoxContact src={"/yunjin.jpg"} name={"Huh Yunjin"} />
      </div>
      <Footer />
    </section>
  )
}

export default ListContacts
