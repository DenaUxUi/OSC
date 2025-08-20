import React from "react";
import clsx from "clsx";
import styles from "./style.module.css";

const Button = ({
  children, bgButton, iconsWrapper, icons, type = "button", onClick
}) => {
  return (
    <button type={type} className={clsx(styles.mainBtn, bgButton)} onClick={onClick}>
      <div className={iconsWrapper}>{icons}</div>
      {children}
    </button>
  );
};

export default Button;
