import { Link } from "react-router-dom"

const BoxContact = ({ name, src }) => {
  return (
    <div className="relative w-[340px] h-[59px] bg-primaryBox flex items-center shadow-main ">
      <div className="w-[50px] ml-3">
        <img
          src={src}
          alt=""
          className="w-full rounded-full object-cover overflow-hidden"
        />
      </div>
      <h1 className="ml-5">{name}</h1>
      <div className="absolute grid grid-flow-col gap-3 right-3">
        <Link to={`/contact/${name}`}>
          <img src="eye.svg" alt="see-detail" className="cursor-pointer" />
        </Link>
        <img src="trash-can.svg" alt="delete" className="cursor-pointer" />
      </div>
    </div>
  )
}

export default BoxContact
