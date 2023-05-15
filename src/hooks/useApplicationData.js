import { useState, useEffect } from 'react';

export default function useApplicationData() {

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
  };
};