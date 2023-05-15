import { useState, useEffect } from 'react';

export default function useApplicationData() {

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

  const [state, setState] = useState({
    hovered: false
  });

  const setIsHovered = hovered => setState({ ...state, hovered });

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getImageSrc = () => {
    if (state.hovered) {
      return 'https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/liam-ella.jpg';
    } else {
      return 'https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/liamnaylor_bw.jpg';
    }
  };

  return {
    state,
    handleHover,
    handleMouseLeave,
    getImageSrc,
    devPortfolio
  };
};