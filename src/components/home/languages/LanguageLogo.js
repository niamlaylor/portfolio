import Image from "next/image";

export default function LanguageLogo({children, url, height, width}) {
  const logoMargin = "m-7";
  const logoSize = "h-20";
  return(
    <div className={`flex flex-col ${logoMargin} items-center text-center`}>
      <Image
        src={url}
        loading="lazy"
        height={height}
        width={width}
        className={`rounded-tl-lg ${logoSize}`}
        alt="Coding languages Liam Naylor writes in"
      />
      <span className="text-xs mt-2">{children}</span>
    </div>
  )
}