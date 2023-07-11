import Image from "next/image";
import Link from "next/link";

export default function NavContactLinkItem({ children, url }) {
  const linkClass = "text-black text-sm ml-1 mr-2 font-semibold";
  return (
    <Link href="https://github.com/niamlaylor" target="_blank">
      <div className="flex flex-row">
        <Image 
          src={url}
          width={20}
          height={20}
          alt="Liam Naylor Github link"
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