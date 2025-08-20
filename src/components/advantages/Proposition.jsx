import clsx from "clsx";
import React from "react";
import styles from "./style.module.css";

const Proposition = ({ propositionContainer, icon, description }) => {
  return (
    <div className={clsx(styles.propositionContainer, propositionContainer)}>
      <div>{icon}</div>
      <p>{description}</p>
    </div>
  );
};

export default Proposition;
