import { useState, useEffect } from 'react';

export default function useApplicationData() {

  const [state, setState] = useState({
    hovered: false,
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
      return 'https://drive.google.com/uc?id=1kONe_03iIS6gHTg0bBlaIIhjfL2GFFZr';
    } else {
      return 'https://drive.google.com/uc?id=1u6I7FaW0Qy0NK2DhgM7Xx6uQM0-Y8xI-';
    }
  };

  return {
    state,
    handleHover,
    handleMouseLeave,
    getImageSrc,
  };
};