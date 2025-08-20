import React from "react";
import NavMenu from "../nav-menu/NavMenu";
import Contacts from "../contacts/Contacts";
import styles from "./style.module.css";
import PersonalAccount from "./PersonalAccount";
import Button from "../../common/button/Button";
import Like from "../../assets/icons/Like";
import Consultation from "../contacts/Consultation";

const HeaderMenuMobile = () => {
  const handleClick = () => {
    const target = document.getElementById("pop-up-button");
    target.click();
  };

  return (
    <>
      <PersonalAccount />
      <div onClick={handleClick} />
      <NavMenu
        navMenuContainer={styles.sideNavMenu}
        navContent={styles.navContent}
      />
      <Button
        icons={<Like />}
        iconsWrapper={styles.likeContainer}
        onClick={handleClick}
      >
        Попробовать 14 дней бесплатно!
      </Button>
      <Consultation consultationWrapper={styles.consultation} />
      <Contacts consultation={styles.consultationDNone} />
    </>
  );
};

export default HeaderMenuMobile;
