import Languages from "../home/languages/Languages";
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
      <p>I'm a full-stack developer and digital copywriter. </p>
      <Experience />
      <Languages />
    </section>
  );
};