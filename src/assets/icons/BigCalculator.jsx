import React from "react";

const BigCalculator = ({ width = 32, height = 48 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 14H22"
        stroke="#FF405B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 34V28"
        stroke="#FF405B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 22H22.02"
        stroke="#FF405B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 22H16.02"
        stroke="#FF405B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 22H10.02"
        stroke="#FF405B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 28H10.02"
        stroke="#FF405B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 28H16.02"
        stroke="#FF405B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 34H16.02"
        stroke="#FF405B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 34H10.02"
        stroke="#FF405B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 14C2 10.2288 2 8.34314 3.17158 7.17158C4.34314 6 6.22876 6 10 6H16H22C25.7712 6 27.6568 6 28.8284 7.17158C30 8.34314 30 10.2288 30 14V24V34C30 37.7712 30 39.6568 28.8284 40.8284C27.6568 42 25.7712 42 22 42H16H10C6.22876 42 4.34314 42 3.17158 40.8284C2 39.6568 2 37.7712 2 34V24V14Z"
        stroke="#FF405B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BigCalculator;
