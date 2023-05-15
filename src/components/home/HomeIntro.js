import { useState } from "react";

export default function HomeIntro({ handleHover, handleMouseLeave, getImageSrc }) {
  
  return (
    <section className="flex sm:flex-col md:flex-row lg:flex-row items-center justify-center">
      <h2 className="m-5">Hi, I'm Liam.</h2>
      <img
        src={getImageSrc()}
        height={300}
        width={300}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        loading="lazy"
        className="m-5"
      />
    </section>
  );
};