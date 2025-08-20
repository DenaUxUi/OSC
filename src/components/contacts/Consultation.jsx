import React from "react";
import clsx from "clsx";
import Headphones from "../../assets/icons/Headphones";
import styles from "./style.module.css";

const Consultation = ({ consultation, consultationWrapper }) => {
  const handleClick = () => {
    const target = document.getElementById("pop-up-button");
    target.click();
  };

  return (
    <div onClick={handleClick} className={consultationWrapper}>
      <div className={clsx(styles.consultation, consultation)}>
        <span className="main-title">Обратный звонок</span>
        <Headphones />
      </div>
    </div>
  );
};

export default Consultation;
