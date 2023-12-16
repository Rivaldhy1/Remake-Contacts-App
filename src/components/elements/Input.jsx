const Input = ({ type = "text", placeholder, name, id }) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
      required
      className="w-[327px] h-[43px] bg-primaryInput mt-2 rounded-md p-3 text-black
      "
    />
  )
}

export default Input
