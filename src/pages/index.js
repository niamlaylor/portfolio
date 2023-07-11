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
        <meta name="description" content="Check out my unique portfolio of recent copywriting and web development projects." />
        <meta name="keywords" content="javascript, python, ruby, react, development, coding, full-stack developer, liam naylor, copywriting" />
      </Head>
      <HomeIntro 
        handleHover={handleHover}
        handleMouseLeave={handleMouseLeave}
        getImageSrc={getImageSrc}
      />
    </main>
  )
}