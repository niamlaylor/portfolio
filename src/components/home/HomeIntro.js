import Languages from "../home/languages/Languages";

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
      <h2 className="w-full mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Full-Stack Developer</h2>
      <Languages />
    </section>
  );
};