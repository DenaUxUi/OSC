import React, { useState } from "react";
import styles from "./style.module.css";
import Logo from "../../assets/icons/Logo";
import NavMenu from "../nav-menu/NavMenu";
import CalculatorIcon from "../../assets/icons/CalculatorIcon";
import Headphones from "../../assets/icons/Headphones";
import BurgerMenu from "../../assets/icons/BurgerMenu";
import topDescriptionImg from "../../assets/images/top-description.png";
import Like from "../../assets/icons/Like";
import SideMenu from "./SideMenu";
import Button from "../../common/button/Button";
import Contacts from "../contacts/Contacts";
import PersonalAccount from "./PersonalAccount";
import { useDimensions } from "../../hooks/useDimensions";

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  const isMobile = useDimensions();

  return (
    <header className={styles.headerContainer}>
      <div className="container">
        {!isMobile ? (
          <>
            <div className={styles.headerContent}>
              <Logo />
              <div className={styles.topNav}>
                <NavMenu navMenuContainer={styles.headerNavMenu} />
                <PersonalAccount />
              </div>
            </div>
            <div className={styles.headerBottom}>
              <span className={styles.official}>Официальный франчайзи 1С</span>
              <Contacts bottomNavWrapper={styles.bottomNavWrapper} />
            </div>
          </>
        ) : (
          !isOpenMenu && (
            <div className={styles.headerContainerMobile}>
              <a href="#calculator" className={styles.calcContainer}>
                <div className={styles.calcContent}>
                  <CalculatorIcon />
                  <p> Калькулятор тарифа </p>
                </div>
              </a>
              <div className={styles.dFlex}>
                <div
                  onClick={() => {
                    const target = document.getElementById("pop-up-button");
                    target.click();
                  }}
                >
                  <Headphones />
                </div>
                <button
                  className={styles.burgerMenu}
                  onClick={handleToggleMenu}
                  aria-label="burger menu"
                >
                  <BurgerMenu />
                </button>
              </div>
            </div>
          )
        )}

        {isOpenMenu && isMobile ? (
          <SideMenu onClick={handleToggleMenu} />
        ) : (
          <>
            <div className={styles.topContainer}>
              <div className={styles.topLeftBlock}>
                <h1> Бухгалтерия и учёт быстро и просто! </h1>
                <p className="main-title">
                  Облачная 1С – это программа для ведения учета, в которой можно
                  работать удаленно через интернет. Тарифы от 1230 рублей в
                  месяц!
                </p>
              </div>
              <div className={styles.topRightBlock}>
                <img src={topDescriptionImg} alt="Preview" />
              </div>
            </div>
            <div>
              <Button
                icons={<Like />}
                iconsWrapper={styles.likeContainer}
                onClick={() => {
                  const target = document.getElementById("pop-up-button");
                  target.click();
                }}
              >
                Попробовать 14 дней бесплатно!
              </Button>
            </div>
            <p className={styles.trialPeriod}>
              В пробном периоде доступен полный функционал тарифа 1С в Облаке
              для автоматизации Вашего бизнеса и бухгалтерии
            </p>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
