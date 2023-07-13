export default function LabelPill({ children, index }) {
  if (index === 0) {
    return (
      <button className="py-1 px-2 no-underline rounded-full text-white font-sans font-light text-xs bg-gray-500 btn-primary cursor-auto hover:bg-gray-100 hover:text-black">{children}</button>
    )
  } else {
    return (
      <button className="py-1 px-2 no-underline rounded-full text-white font-sans font-light text-xs bg-gray-500 btn-primary cursor-auto hover:bg-gray-100 hover:text-black ml-2">{children}</button>
    )
  }
}