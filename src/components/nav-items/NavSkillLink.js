export default function NavSkillLink( { children } ) {
  const lowerCaseChild = children.toLowerCase();
  return (
    <a 
      href={`${lowerCaseChild}`} 
      className="text-black text-lg ml-1 mr-1 font-semibold"
    >
      {children}
    </a>
  )
};