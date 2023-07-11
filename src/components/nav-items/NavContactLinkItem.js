import Image from "next/image";
import Link from "next/link";

export default function NavContactLinkItem({ children, url, href }) {
  const linkClass = "text-black text-sm ml-1 mr-2 font-semibold";
  return (
    <Link href={href} target="_blank">
      <div className="flex flex-row">
        <Image 
          src={url}
          width={20}
          height={20}
          alt={`Liam Naylor ${children} link`}
          // rounded-full class is just for the medium icon
          className={"rounded-full"} 
        />
        <p className={`${linkClass} flex`}>
          {children}
        </p>
      </div>
    </Link>
  )
}