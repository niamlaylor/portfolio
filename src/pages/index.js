import HomeIntro from "@/components/home/HomeIntro";
import HomeProjects from "@/components/home/projects/HomeProjects";
import useApplicationData from "../hooks/useApplicationData";

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
      <HomeProjects />
    </main>
  )
}