import React from "react";

const Statuses = ({ width = 16, height = 16, color = "#ffffff" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="#29C3A8" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2061 6.4823L7.02144 11.5884L4.20605 8.81563L5.09836 7.85116L7.02144 9.7451L11.3137 5.51782L12.2061 6.4823Z"
        fill={color}
      />
    </svg>
  );
};

export default Statuses;
