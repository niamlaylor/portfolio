export default function LabelPill({ children, index }) {
  if (index === 0) {
    return (
      <button className="py-1 px-2 no-underline rounded-full text-black font-sans font-light text-xs bg-transparent btn-primary border border-gray-500 cursor-auto">{children}</button>
    )
  } else {
    return (
      <button className="py-1 px-2 no-underline rounded-full text-black font-sans font-light text-xs bg-transparent btn-primary border border-gray-500 cursor-auto ml-2">{children}</button>
    )
  }
}