import { useState } from "react";

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
      <h3 className="text-md mt-5">LIAM NAYLOR</h3>
      <h2 className="w-full text-h1-mobile text-center">Full-Stack Developer</h2>
    </section>
  );
};