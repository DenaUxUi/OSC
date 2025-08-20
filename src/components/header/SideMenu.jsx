import React from "react";
import BurgerMenuClose from "../../assets/icons/BurgerMenuClose";
import Logo from "../../assets/icons/Logo";
import styles from "./style.module.css";
import HeaderMenuMobile from "./HeaderMenuMobile";
import SocialNetworks from "../social-networks/SocialNetworks";

const SideMenu = ({ onClick }) => {
  return (
    <div className={styles.sideMenuContainer}>
      <div className={styles.sideMenuHeader}>
        <div className={styles.sideLogoContainer}>
          <Logo className={styles.logoMobile} />
          Официальный франчайзи 1С
        </div>
        <button
          className={styles.burgerMenu}
          onClick={onClick}
          aria-label="burger menu close"
        >
          <BurgerMenuClose />
        </button>
      </div>
      <div className={styles.sideMenuContent}>
        <SocialNetworks socialNetworksWrapper={styles.socialNetworksWrapper} />
        <h1> Бухгалтерия и учёт быстро и просто! </h1>
        <p className="main-title">
          Облачная 1С – это программа для ведения учета, в которой можно
          работать удаленно через интернет. Тарифы от 1230 рублей в месяц!
        </p>
        <HeaderMenuMobile />
      </div>
    </div>
  );
};

export default SideMenu;
