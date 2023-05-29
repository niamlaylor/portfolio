import HomeCard from "@/components/home/HomeCard";
import HomeIntro from "@/components/home/HomeIntro";
import useApplicationData from "../hooks/useApplicationData";
import Carousel from "@/components/home/Carousel";

export default function Home() {

  const {
    state,
    handleHover,
    handleMouseLeave,
    getImageSrc,
  } = useApplicationData();

  return (
    <main>
      <HomeIntro 
        handleHover={handleHover}
        handleMouseLeave={handleMouseLeave}
        getImageSrc={getImageSrc}
      />
      {/* <HomeCard /> */}
    </main>
  )
}