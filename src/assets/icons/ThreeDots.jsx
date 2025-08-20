import React from "react";

const ThreeDots = ({ width = 88, height = 56 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 88 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="88" height="56" rx="25" fill="#E3E9F0" />
      <circle cx="28" cy="28" r="4" fill="#D1D9EE" />
      <circle cx="44" cy="28" r="4" fill="#D1D9EE" />
      <circle cx="60" cy="20" r="4" fill="#D1D9EE" />
    </svg>
  );
};

export default ThreeDots;
