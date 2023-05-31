import Languages from "../home/languages/Languages";
import Heading2 from "../headers/h2";
import Experience from "./languages/Experience";

export default function HomeIntro({ handleHover, handleMouseLeave, getImageSrc }) {
  
  return (
    <section className="flex flex-col items-center justify-center mt-20 mb-20">
      <img
        src={getImageSrc()}
        height={300}
        width={300}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        loading="lazy"
        className="m-5 rounded-full"
      />
      <h3 className="text-base font-semibold leading-7 text-blue-500">Hi, I'm Liam.</h3>
      <Experience />
      {/* <Languages /> */}
    </section>
  );
};