import React from "react";

const Minus = ({ width = 10, height = 2, color = "#ffffff" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 2C9.55228 2 10 1.55228 10 1C10 0.447715 9.55228 2.41411e-08 9 0L9 2ZM1 -3.49691e-07C0.447715 -3.73832e-07 2.41411e-08 0.447715 0 1C-2.41411e-08 1.55228 0.447715 2 1 2L1 -3.49691e-07ZM9 0L1 -3.49691e-07L1 2L9 2L9 0Z"
        fill={color}
      />
    </svg>
  );
};

export default Minus;
