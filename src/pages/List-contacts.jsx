import Footer from "../components/elements/Footer"
import TitleText from "../components/elements/Title"
import BoxContact from "../components/fragments/BoxListContact"

const ListContacts = () => {
  return (
    <section className="bg-primary min-h-screen">
      <TitleText>List Contacts</TitleText>
      <div className="grid gap-6 place-items-center">
        <hr className="w-[90%] my-[32px]" />
        <BoxContact src={"/yunjin.jpg"} name={"Huh Yunjin"} />
      </div>
      <Footer />
    </section>
  )
}

export default ListContacts
