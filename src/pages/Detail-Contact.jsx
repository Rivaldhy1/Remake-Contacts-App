import Footer from '../components/elements/Footer'
import InfoContact from '../components/fragments/InfoContact'

const DetailContact = (src, fname, about, phone) => {
  return (
    <section className="bg-primary min-h-screen">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="w-[119px] h-[119px] bg-white mt-24 shadow-main rounded-full overflow-hidden">
          <img
            src={src}
            alt={src}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="text-center mt-5 px-[50px]">
          <h1 className="text-2xl text-primary">About: </h1>
          <p className="text-sm tracking-wide pt-3 text-primary">{about}</p>
        </div>

        <InfoContact name={fname} phone={phone} />
      </div>
      <Footer />
    </section>
  )
}

export default DetailContact
