import { Link } from 'react-router-dom'

const BoxContact = ({ fname, src }) => {
  return (
    <div className="relative w-[340px] h-[59px] bg-primaryBox flex items-center shadow-main ">
      <div className="relative w-[50px] h-[47px] rounded-full ml-3 shadow-main overflow-hidden">
        <img
          src={src}
          alt={src}
          className={`${
            src ? 'bg-transparent' : 'bg-[#D9D9D9]'
          } w-full h-full object-cover object-center`}
        />
      </div>
      <h1 className="ml-5 tracking-wide">{fname}</h1>
      <div className="absolute grid grid-flow-col place-items-center gap-5 right-3">
        <Link to={`/contact/${fname}`}>
          <img src="eye.svg" alt="see-detail" className="cursor-pointer w-5" />
        </Link>
        <img src="trash-can.svg" alt="delete" className="cursor-pointer w-4" />
      </div>
    </div>
  )
}

export default BoxContact
