export default function NavSkillLink( { children } ) {
  const lowerCaseChild = children.toLowerCase();
  return (
    <a 
      href={`${lowerCaseChild}`} 
      className="text-black bg-custom-gray text-lg px-4 ml-1 mr-1 font-semibold border border-custom-blue rounded-md hover:bg-blue-500"
    >
      {children}
    </a>
  )
};