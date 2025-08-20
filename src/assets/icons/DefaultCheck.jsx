import React from "react";

const DefaultCheck = ({ width = 16, height = 16 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="16" rx="2" fill="#4399FF" fillOpacity="0.2" />
      <path d="M4 7.5L6.56598 10L12 5" stroke="#4399FF" strokeWidth="2" />
    </svg>
  );
};

export default DefaultCheck;
