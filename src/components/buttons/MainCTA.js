export default function MainCTA({ children, url }) {
  return (
    <a href={url} rel="noopener noreferrer" className="mt-12 inline-flex items-center justify-center px-5 py-3 w-1/2 border border-transparent text-xs font-medium rounded-md text-black bg-gray-300 hover:bg-white">
      {`${children} >`}
    </a>
  )
}