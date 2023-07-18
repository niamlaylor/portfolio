import Link from "next/link";

export default function LandingPageContact({ links }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 sm:grid-cols-1 md:flex lg:gap-x-10">
      {links.map((link) => (
        <Link key={link.name} href={link.href} target="_blank" className={"hover:text-blue-500"}>
          {link.name} <span aria-hidden="true">&rarr;</span>
        </Link>
      ))}
    </div>
  );
};