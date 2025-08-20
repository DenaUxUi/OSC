import clsx from "clsx";
import React, { useCallback } from "react";
import styles from "./style.module.css";
import CalculatorIcon from "../../assets/icons/CalculatorIcon";
import ColorSwatch from "../../assets/icons/ColorSwatch";
import { useDimensions } from "../../hooks/useDimensions";

const NavMenu = ({ navMenuContainer, navContent }) => {
  const isMobile = useDimensions();

  const handleScroll = useCallback(
    (id) => () => {
      const scroll = document.querySelector(id);

      scroll.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    []
  );

  return (
    <nav className={clsx(styles.navMenuContainer, navMenuContainer)}>
      <div
        id="#calculator"
        onClick={handleScroll("#calculator")}
        className={clsx(styles.mr, navContent)}
      >
        <div className={styles.navItem}>
          <CalculatorIcon color={isMobile ? "#4399FF" : "#FF405B"} />
          <span className="main-title">Калькулятор тарифа</span>
        </div>
      </div>
      <div
        id="#configuration"
        onClick={handleScroll("#configuration")}
        className={clsx(styles.mr, navContent)}
      >
        <div className={styles.navItem}>
          <ColorSwatch color={isMobile ? "#4399FF" : "#FF405B"} />
          <span className="main-title">Конфигурации</span>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
