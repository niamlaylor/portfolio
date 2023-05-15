import { useState } from "react";

export default function HomeIntro({ hovered, handleHover, handleMouseLeave, getImageSrc }) {
  
  return (
    <section className="flex sm:flex-col md:flex-row lg:flex-row items-center justify-center">
      <p>Hi, I'm Liam.</p>
      <img
        src={getImageSrc()}
        height={275}
        width={275}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        loading="lazy"
        className="mr-1"
      />
    </section>
  );
};