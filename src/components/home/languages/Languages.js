import Heading2 from "@/components/headers/h2";
import LanguageLogo from "./LanguageLogo";

const languages = [
  {
    name: "JavaScript",
    url: "https://drive.google.com/uc?id=1-cSWQh0JQdkiEFOPyik6CNu2l1VwlvPw",
    height: 51,
    width: 80
  },
  {
    name: "Python",
    url: "https://drive.google.com/uc?id=1n41nMozIOv8lT2cn46JVQz3qcQl5GX-t",
    height: 51,
    width: 80
  },
  {
    name: "Ruby",
    url: "https://drive.google.com/uc?id=1rrwcM9ram6QaaiNROMhiyRgjApTrbar5",
    height: 51,
    width: 90
  },
  {
    name: "HTML/CSS",
    url: "https://drive.google.com/uc?id=1NybjWnCmyndk_0PhJkEKyUzgUNtELGQ_",
    height: 51,
    width: 60
  },
  {
    name: "SQL",
    url: "https://drive.google.com/uc?id=1i_6HHo8gy79ilALOS8SOx1wnBKAQxlm_",
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
