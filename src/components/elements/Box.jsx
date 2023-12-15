export const Box = ({ children, className }) => {
  return (
    <div
      className={`bg-box w-[147px] h-[303px] shadow-main flex flex-col justify-center items-center rounded-lg cursor-pointer font-bold text-lg ${className}`}
    >
      {children}
    </div>
  )
}
