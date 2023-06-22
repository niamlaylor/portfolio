import Head from "next/head";
import HomeIntro from "@/components/home/HomeIntro";
import useApplicationData from "../hooks/useApplicationData";

export default function Home() {

  const {
    state,
    handleHover,
    handleMouseLeave,
    getImageSrc,
  } = useApplicationData();

  return (
    <main className="w-full">
      <Head>
        <title>Portfolio | Liam Naylor</title>
      </Head>
      <HomeIntro 
        handleHover={handleHover}
        handleMouseLeave={handleMouseLeave}
        getImageSrc={getImageSrc}
      />
    </main>
  )
}