import { useState } from "react";

export default function HomeIntro() {
  const [hovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getImageSrc = () => {
    if (hovered) {
      return 'https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/liam-ella.jpg';
    } else {
      return 'https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/liamnaylor_bw.jpg';
    }
  };

  return (
    <section className="flex sm:flex-col md:flex-row lg:flex-row items-center justify-center">
      <p>Hi, I'm Liam.</p>
      <img
        src={getImageSrc()}
        height={300}
        width={300}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        loading="lazy"
        className="rounded-full mr-1"
      />
    </section>
  );
};