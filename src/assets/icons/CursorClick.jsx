import React from "react";

const CursorClick = ({ width = 40, height = 40, color = "#FF405B" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6948 30.3283L14.2323 18.552C13.1439 15.6798 16.0684 12.9015 19.0918 13.9355L31.488 18.175C35.1605 19.431 34.6884 24.5018 30.8406 25.1257L29.3673 25.3647C27.7788 25.6225 26.5343 26.8046 26.2631 28.3139L26.0116 29.7135C25.3546 33.3688 20.017 33.8174 18.6948 30.3283Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 5.71484V3.71484"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 16.7148H5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 5.71484L11 9.71484"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CursorClick;
