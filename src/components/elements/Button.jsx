export const Button = ({ children, type, onClick }) => {
  return (
    <button
      className="transition ease-linear w-[327px] h-8 my-10 mx-auto shadow-main font-normal text-lg text-primary bg-primary rounded-md hover:bg-primaryBox hover:text-black"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
