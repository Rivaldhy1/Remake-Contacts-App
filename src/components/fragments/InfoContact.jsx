const InfoContact = ({ fname, email, phone }) => {
  return (
    <div className="place-items-center grid gap-14 px-5 my-14">
      <div className="relative flex items-center text-primary w-[320px]">
        <img src="/profile.svg" alt="profile" />
        <div className="px-5 pb-2 tracking-wide">
          <h3>Name</h3>
          <h4>{fname}...</h4>
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
        <div className="px-5 pb-2 tracking-wide">
          <h3>Email</h3>
          <h4>{email}...</h4>
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
          <h4>{phone}</h4>
        </div>
        <img
          src="/edit.svg"
          alt="edit"
          className="absolute right-0 cursor-pointer"
        />
        <hr className="w-full absolute bottom-0 " />
      </div>
    </div>
  )
}

export default InfoContact
