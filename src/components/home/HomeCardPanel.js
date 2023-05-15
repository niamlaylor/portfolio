import HomeCardPanelItem from "./HomeCardProjectItem";

export default function HomeCardPanel({ children, bgColor, textColor, type }) {

  const devPortfolio = [
    {   
      name: "Sifter",
      description: "A recipe parser that creates and saves a consistently formatted recipe from a food blog or recipe site.",
      stack: "Next.js, React, Node.js, Prisma, Supabase",
      date: "April 2023",
      image: "https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/burger-1000x390.jpg"
    },
    { 
      name: "Scheduler",
      description: "React application to allow applicants to book, change or cancel job interviews with employers.",
      stack: "React, Node.js, Storybook, Jest, Vypress, CircleCI, Railway",
      date: "February 2023",
      image: "https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/bc-ferries-app-WEB.jpg"
    },
  ];

  const copyPortfolio = [
    {   
      name: "BC Ferries website",
      description: "A recipe parser that creates and saves a consistently formatted recipe from a food blog or recipe site.",
      stack: "Next.js, React, Node.js, Prisma, Supabase",
      date: "April 2023",
      image: "https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/bc-ferries-vessel-WEB.jpg"
    },
    { 
      name: "BC Ferries mobile app",
      description: "React application to allow applicants to book, change or cancel job interviews with employers.",
      stack: "React, Node.js, Storybook, Jest, Vypress, CircleCI, Railway",
      date: "March 2023",
      image: "https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/bc-ferries-app-WEB.jpg"
    },
  ];

  const dev = devPortfolio.map((project, index) => {
    return (
      <HomeCardPanelItem
        key={index}
        project={project}
      />
    );
  });

  const copy = copyPortfolio.map((project, index) => {
    return (
      <HomeCardPanelItem
        key={index}
        project={project}
      />
    );
  });

  return (
    <article className={`flex flex-col items-center justify-start w-full ${bgColor}`}>
      <h1 className={`${textColor} sm:text-h2-mobile md:text-h2-tablet lg:text-h2-desktop mt-10 font-semibold`}>{children}</h1>
      <div className="flex-1 w-full">
        <ul className="flex flex-col items-center mt-10">
          {type === 'dev' && dev}
          {type === 'copy' && copy}
        </ul>
      </div>
    </article>
  );
};