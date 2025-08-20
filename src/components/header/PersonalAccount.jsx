import React from "react";
import styles from "./style.module.css";
import UserIcon from "../../assets/icons/UserIcon";

const PersonalAccount = () => {
  return (
    <a href="https://lk.onescloud.net">
      <div className={styles.personalAccWrapper}>
        <p className="main-title">Личный кабинет</p>
        <UserIcon />
      </div>
    </a>
  );
};

export default PersonalAccount;
