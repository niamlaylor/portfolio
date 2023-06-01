import Languages from "../home/languages/Languages";
import Experience from "./languages/Experience";
import Heading2 from "../headers/h2";

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
      <Heading2>Hi, I'm Liam.</Heading2>
      <p className="mt-5">I'm a full-stack developer and digital copywriter.</p>
      <Experience />
      <Languages />
    </section>
  );
};