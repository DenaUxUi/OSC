import React from "react";

const ColorSwatch = ({ width = 24, height = 24, color = "#4399FF" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3C8.88562 3 9.82843 3 10.4142 3.58579C11 4.17157 11 5.11438 11 7V12V17C11 18.8856 11 19.8284 10.4142 20.4142C9.82843 21 8.88562 21 7 21C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V12V7Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 7.50018L12.6716 5.82861C14.0049 4.49527 14.6716 3.82861 15.5 3.82861C16.3284 3.82861 16.9951 4.49527 18.3284 5.82861L19.1716 6.67175C20.5049 8.00509 21.1716 8.67175 21.1716 9.50018C21.1716 10.3286 20.5049 10.9953 19.1716 12.3286L11 20.5002"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 21H17C18.8856 21 19.8284 21 20.4142 20.4142C21 19.8284 21 18.8856 21 17V15.5C21 15.0353 21 14.803 20.9616 14.6098C20.8038 13.8164 20.1836 13.1962 19.3902 13.0384C19.197 13 18.9647 13 18.5 13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 17.01V17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ColorSwatch;
