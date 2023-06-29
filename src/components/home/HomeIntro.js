import Image from "next/image";
import Languages from "../home/languages/Languages";
import Heading2 from "../headers/h2";
import ExperienceGrid from "./languages/ExperienceGrid";

export default function HomeIntro({ handleHover, handleMouseLeave, getImageSrc }) {
  
  return (
    <section className="flex flex-col items-center justify-center mt-20 mb-20 ml-5 mr-5">
      <Image
        src={getImageSrc()}
        width={400}
        height={400}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        loading="lazy"
        className="mb-8 rounded-full shadow-md"
        alt="Liam Naylor"
      />
      <Heading2>Hi, I&apos;m Liam.</Heading2>
      <div className="max-w-xl text-base leading-7 text-gray-700 sm:max-w-md md:max-w-lg">
        <p className="mt-5 mb-5">I&apos;m a full-stack developer and copywriter with experience writing for nine-figure SaaS websites and apps. I can produce clean and efficient code, write exceptional copy, and design gorgeous interfaces—a rare skillset.</p>
      </div>
      <ExperienceGrid />
      <Languages />
    </section>
  );
};