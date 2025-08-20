import React from "react";

const BurgerMenu = ({ width = 24, height = 18 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 1H24" stroke="#FF405B" strokeWidth="2" />
      <path d="M0 9H24" stroke="white" strokeWidth="2" />
      <path d="M16 17H24" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export default BurgerMenu;
