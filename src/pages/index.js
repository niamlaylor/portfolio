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
        <meta name="description" content="Check out some of my recent full-stack development projects in JavaScript, Ruby, Python and more." />
        <meta name="keywords" content="javascript, python, ruby, react, development, coding, software, full-stack development, liam naylor" />
      </Head>
      <HomeIntro 
        handleHover={handleHover}
        handleMouseLeave={handleMouseLeave}
        getImageSrc={getImageSrc}
      />
    </main>
  )
}