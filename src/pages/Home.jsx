import Footer from '../components/elements/Footer'
import BoxsHome from '../components/fragments/BoxsHome'

const Home = () => {
  return (
    <section className="relative box-border min-h-screen bg-primary font-serif">
      <div className="flex flex-col font-serif tracking-wider text-[32px] font-normal text-primary text-center pt-[44px]">
        <span>My</span>
        <span>Contacts App</span>
      </div>

      <BoxsHome />

      <Footer />
    </section>
  )
}

export default Home
