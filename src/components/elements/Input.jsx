const Input = ({ type = 'text', placeholder, name, id, value, onChange }) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      autoComplete="off"
      required
      className="w-[327px] h-[43px] text-base bg-primaryInput mt-2 rounded-md p-3 text-black
      "
    />
  )
}

export default Input
