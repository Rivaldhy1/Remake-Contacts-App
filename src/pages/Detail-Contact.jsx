import Footer from "../components/elements/Footer"

const DetailContact = () => {
  return (
    <section className="bg-primary min-h-screen">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="w-[119px] mt-24 shadow-main rounded-full overflow-hidden">
          <img
            src="/yunjin.jpg"
            alt=""
            className="w-full object-cover object-center"
          />
        </div>
        <div className="text-center mt-5 px-[50px]">
          <h1 className="text-2xl text-primary">Bio: </h1>
          <p className="text-sm tracking-wide pt-3 text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora
            maiores quasi dolorum omnis dolores id adipisci voluptate, libero
            eaque?
          </p>
        </div>

        <div className="place-items-center grid gap-14 px-5 my-14">
          <div className="relative flex items-center text-primary w-[320px]">
            <img src="/profile.svg" alt="profile" />
            <div className="px-5 pb-2 tracking-wide">
              <h3>Name</h3>
              <h4>Huh Yunjin</h4>
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
            <div className="px-5 pb-2 tracking-wide">
              <h3>Phone</h3>
              <h4>+620931823382</h4>
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
