import React from "react";

const AcademicCap = ({ width = 40, height = 40, color = "#FF405B" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.2734 7.06851L6.069 14.4043C5.602 14.6637 5.602 15.3353 6.069 15.5948L19.2734 22.9305C19.7237 23.1807 20.2714 23.1807 20.7217 22.9305L34.2819 15.3971C34.5939 15.2238 34.5939 14.7753 34.2819 14.602L20.7217 7.06851C20.2714 6.81831 19.7237 6.81831 19.2734 7.06851Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.16707 17.5L8.55288 25.4843C8.42678 27.1237 9.51597 28.6065 11.1011 29.0433C12.1397 29.3293 13.2817 29.6695 14.1671 30C15.4415 30.4757 16.8547 31.2762 17.9711 31.9735C19.2049 32.7442 20.7959 32.7442 22.0299 31.9733C23.1461 31.2762 24.5594 30.4757 25.8337 30C26.7191 29.6695 27.8612 29.3293 28.8997 29.0432C30.4849 28.6065 31.5741 27.1237 31.4481 25.4843L30.8337 17.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.1693 17.5L15.0155 19.8737C13.9769 20.467 13.3359 21.5715 13.3359 22.7677V33.3333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AcademicCap;
