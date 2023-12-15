export const Box = ({ children, onClick, className }) => {
  return (
    <div
      className={`bg-box w-[147px] h-[303px] shadow-main flex flex-col justify-center items-center rounded-lg cursor-pointer font-bold ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
