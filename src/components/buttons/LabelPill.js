export default function LabelPill({ children, index }) {
  if (index === 0) {
    return (
      <button className="py-1 px-2 no-underline rounded-full text-white font-sans font-light text-xs bg-gray-700 btn-primary hover:text-white hover:bg-blue-light">{children}</button>
    )
  } else {
    return (
      <button className="py-1 px-2 no-underline rounded-full text-white font-sans font-light text-xs bg-gray-700 btn-primary hover:text-white hover:bg-blue-light ml-2">{children}</button>
    )
  }
}