import Heading2 from "@/components/headers/h2";
import LanguageLogo from "./LanguageLogo";

const languages = [
  {
    name: "JavaScript",
    url: "https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/js-gs.jpg",
    height: 51,
    width: 80
  },
  {
    name: "Python",
    url: "https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/py-gs.jpg",
    height: 51,
    width: 80
  },
  {
    name: "Ruby",
    url: "https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/rb-gs.jpg",
    height: 51,
    width: 90
  },
  {
    name: "HTML/CSS",
    url: "https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/html-gs.jpg",
    height: 51,
    width: 60
  },
  {
    name: "SQL",
    url: "https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/sql-gs.jpg",
    height: 51,
    width: 60
  }
]

export default function Languages() {
  const logoMargin = "m-7";
  const logoSize = "h-20";

  const languagesList = languages.map((language) => {
    return (
      <LanguageLogo
        key={language.name}
        url={language.url}
        height={language.height}
        width={language.width}
      >
        {language.name}
      </LanguageLogo>
    );
  });

  return (
    <div className="flex flex-col mt-10">
      <Heading2>Coding Languages</Heading2>
      <div className="flex sm:flex-col md:flex-row mt-5">
        {languagesList}
      </div>
    </div>
  );
};
