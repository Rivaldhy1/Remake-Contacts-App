const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="flex flex-col text-lg font-normal text-primary tracking-widest"
    >
      {children}
    </label>
  )
}

export default Label
