import React from "react";

const BurgerMenuClose = ({ width = 24, height = 4 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 2H24" stroke="#FF405B" strokeWidth="3" />
    </svg>
  );
};

export default BurgerMenuClose;
