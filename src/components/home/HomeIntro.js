import Languages from "../home/languages/Languages";
import Experience from "./languages/Experience";
import Heading2 from "../headers/h2";

export default function HomeIntro({ handleHover, handleMouseLeave, getImageSrc }) {
  
  return (
    <section className="flex flex-col items-center justify-center mt-20 mb-20">
      <img
        src={getImageSrc()}
        height={400}
        width={400}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        loading="lazy"
        className="m-8 rounded-full shadow-md m-2"
      />
      <Heading2>Hi, I'm Liam.</Heading2>
      <p className="mt-5">I'm a full-stack developer and copywriter with experience writing for nine-figure eCommerce and SaaS websites.</p>
      <Experience />
      <Languages />
    </section>
  );
};