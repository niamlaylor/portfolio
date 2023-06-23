import NavSkillLink from "./nav-items/NavSkillLink";
import NavContactLink from "./nav-items/NavContactLink";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-custom-white py-10 px-8">
      <div className="container mx-auto flex items-center justify-center">
        <Link href="/">
          <p className="text-black tracking-nav-wide lg:text-h1 md:text-h1-tablet sm:text-h1-mobile font-semibold">Liam Naylor</p>
        </Link>
      </div>
      <div className="container mx-auto flex items-center justify-center">
        <NavSkillLink>Development</NavSkillLink>
        <NavSkillLink>Copywriting</NavSkillLink>
      </div>
      <div className="container mx-auto mt-4 flex items-center justify-center">
        <NavContactLink>Github</NavContactLink>
        <NavContactLink>LinkedIn</NavContactLink>
        <NavContactLink>Medium</NavContactLink>
      </div>
    </nav>
  )
};