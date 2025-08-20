import React from "react";

const ClipboardCheck = ({ width = 41, height = 40, color = "#FF405B" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.5026 5C28.6453 5 30.2166 5 31.1929 5.97632C32.1693 6.95262 32.1693 8.52397 32.1693 11.6667V28.3333C32.1693 31.476 32.1693 33.0473 31.1929 34.0237C30.2166 35 28.6453 35 25.5026 35H15.5026C12.3599 35 10.7886 35 9.81225 34.0237C8.83594 33.0473 8.83594 31.476 8.83594 28.3333V11.6667C8.83594 8.52397 8.83594 6.95262 9.81225 5.97632C10.7886 5 12.3599 5 15.5026 5H25.5026Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 5V10C15.5 11.841 16.9924 13.3333 18.8333 13.3333H22.1667C24.0077 13.3333 25.5 11.841 25.5 10V5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 24.9993L18 27.4993C18.4602 27.9595 19.2065 27.9595 19.6667 27.4993L25.5 21.666"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ClipboardCheck;
