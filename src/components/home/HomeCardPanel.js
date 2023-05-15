import { useEffect } from 'react';

export default function HomeCardPanel({ children, bgColor, textColor, type }) {

  const devPortfolio = [
    {   
      name: "Sifter",
      description: "A recipe parser that creates and saves a consistently formatted recipe from a food blog or recipe site.",
      stack: "Next.js, React, Node.js, Prisma, Supabase",
      date: "April 2023"
    },
    { 
      name: "Scheduler",
      description: "React application to allow applicants to book, change or cancel job interviews with employers.",
      stack: "React, Node.js, Storybook, Jest, Vypress, CircleCI, Railway",
      date: "February 2023"
    },
    { 
      name: "ListEasy",
      description: "Smart to-do list web app that automatically sorts tasks into categories based on relevancy with movie, book, restaurant and product results.",
      stack: "Node.js, EJS, jQuery, PostgreSQL, Google Natural Language AI",
      date: "January 2023"
    },
  ];

  const portfolio = devPortfolio.map((project, index) => {
    return (
      <li
        key={index}
      >
        {project.name}
      </li>
    )
  })

  return (
    <article className={`flex flex-col items-center justify-start w-full bg-${bgColor}`}>
      <h1 className={`text-${textColor} sm:text-h2-mobile md:text-h2-tablet lg:text-h2-desktop mt-10 font-semibold`}>{children}</h1>
      <div className="flex-1 w-full">
        <ul className="flex flex-col items-center">
          {portfolio}
        </ul>
      </div>
    </article>
  );
};