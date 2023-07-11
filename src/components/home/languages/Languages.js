import Image from "next/image";
import Heading2 from "@/components/headers/h2";

export default function Languages() {
  const logoMargin = "m-7";
  const logoSize = "h-20";

  return (
    <div className="flex flex-col mt-10">
      <Heading2>Coding Languages</Heading2>
      <div className="flex sm:flex-col md:flex-row mt-5">
        <div className={`flex flex-col ${logoMargin} items-center text-center`}>
          <Image
            src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/js-gs.jpg"
            loading="lazy"
            height={51}
            width={80}
            className={`rounded-tl-lg ${logoSize}`}
            alt="Coding languages Liam Naylor writes in"
          />
          <span className="text-xs mt-2">JavaScript</span>
        </div>
        <div className={`flex flex-col ${logoMargin} items-center text-center`}>
          <Image
            src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/rb-gs.jpg"
            loading="lazy"
            height={51}
            width={90}
            className={`rounded-tl-lg ${logoSize}`}
            alt="Coding languages Liam Naylor writes in"
          />
          <span className="text-xs mt-2">Ruby</span>
        </div>
        <div className={`flex flex-col ${logoMargin} items-center text-center`}>
          <Image
            src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/py-gs.jpg"
            loading="lazy"
            height={51}
            width={80}
            className={`rounded-tl-lg ${logoSize}`}
            alt="Coding languages Liam Naylor writes in"
          />
          <span className="text-xs mt-2">Python</span>
        </div>
        <div className={`flex flex-col ${logoMargin} items-center text-center`}>
          <Image
            src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/html-gs.jpg"
            loading="lazy"
            height={51}
            width={60}
            className={`rounded-tl-lg ${logoSize}`}
            alt="Coding languages Liam Naylor writes in"
          />
          <span className="text-xs mt-2">HTML/CSS</span>
        </div>
        <div className={`flex flex-col ${logoMargin} items-center text-center`}>
          <Image
            src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/sql-gs.jpg"
            loading="lazy"
            height={51}
            width={60}
            className={`rounded-tl-lg ${logoSize}`}
            alt="Coding languages Liam Naylor writes in"
          />
          <span className="text-xs mt-2">SQL</span>
        </div>
      </div>
    </div>
  );
}
