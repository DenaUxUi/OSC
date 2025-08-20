import React from "react";
import NavMenu from "../nav-menu/NavMenu";
import SocialNetworks from "../social-networks/SocialNetworks";
import Contacts from "../contacts/Contacts";
import Headphones from "../../assets/icons/Headphones";
import styles from "./style.module.css";

const FooterMenuMobile = () => {
  return (
    <>
      <SocialNetworks socialNetworksWrapper={styles.socialNetworksWrapper} />
      <div
        onClick={() => {
          const target = document.getElementById("pop-up-button");
          target.click();
        }}
      >
        <div className={styles.consultation}>
          <Headphones />
          <span className="main-title">Обратный звонок</span>
        </div>
      </div>
      <NavMenu
        navMenuContainer={styles.sideNavMenu}
        navContent={styles.navContent}
      />
      <Contacts consultation={styles.consultationDNone} />
    </>
  );
};

export default FooterMenuMobile;
