import React from "react";

const ShoppingBag = ({ width = 40, height = 40, color = "#FF405B" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.51362 17.3898C7.90348 14.6608 8.09842 13.2963 9.0383 12.4812C9.97818 11.666 11.3565 11.666 14.1133 11.666H14.998H24.998H25.8826C28.6395 11.666 30.0178 11.666 30.9576 12.4812C31.8975 13.2963 32.0925 14.6608 32.4823 17.3898L33.911 27.3898C34.4166 30.9303 34.6696 32.7007 33.6728 33.85C32.676 34.9994 30.8878 34.9994 27.3113 34.9994H26.6646H13.3313H12.6847C9.10822 34.9994 7.31998 34.9994 6.32317 33.85C5.32637 32.7007 5.57927 30.9303 6.08505 27.3898L7.51362 17.3898Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 18.3333V8.33333C15 6.49238 16.4924 5 18.3333 5H21.6667C23.5077 5 25 6.49238 25 8.33333V18.3333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShoppingBag;
