import Image from "next/image";
import Heading2 from "@/components/headers/h2";
import LanguageLogo from "./LanguageLogo";

export default function Languages() {
  const logoMargin = "m-7";
  const logoSize = "h-20";

  return (
    <div className="flex flex-col mt-10">
      <Heading2>Coding Languages</Heading2>
      <div className="flex sm:flex-col md:flex-row mt-5">
        <LanguageLogo
          url={"https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/js-gs.jpg"}
          height={51}
          width={80}
        >
          JavaScript
        </LanguageLogo>
        <LanguageLogo
          url={"https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/rb-gs.jpg"}
          height={51}
          width={90}
        >
          Ruby
        </LanguageLogo>
        <LanguageLogo
          url={"https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/py-gs.jpg"}
          height={51}
          width={80}
        >
          Python
        </LanguageLogo>
        <LanguageLogo
          url={"https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/html-gs.jpg"}
          height={51}
          width={60}
        >
          HTML/CSS
        </LanguageLogo>
        <LanguageLogo
          url={"https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/sql-gs.jpg"}
          height={51}
          width={60}
        >
          SQL
        </LanguageLogo>
      </div>
    </div>
  );
}
