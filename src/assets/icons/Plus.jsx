import React from "react";

const Plus = ({ width = 10, height = 10, color = "#ffffff" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 1C6 0.447715 5.55228 0 5 0C4.44772 0 4 0.447715 4 1H6ZM4 9C4 9.55229 4.44772 10 5 10C5.55228 10 6 9.55229 6 9H4ZM4 1V9H6V1H4Z"
        fill={color}
      />
      <path
        d="M9 6C9.55228 6 10 5.55228 10 5C10 4.44772 9.55228 4 9 4L9 6ZM1 4C0.447715 4 2.41411e-08 4.44771 0 5C-2.41411e-08 5.55228 0.447715 6 1 6L1 4ZM9 4L1 4L1 6L9 6L9 4Z"
        fill={color}
      />
    </svg>
  );
};

export default Plus;
