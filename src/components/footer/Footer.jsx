import React from "react";
import styles from "./style.module.css";
import Logo from "../../assets/icons/Logo";
import NavMenu from "../nav-menu/NavMenu";
import SocialNetworks from "../social-networks/SocialNetworks";
import { getCurrentYear } from "../../utils";
import Contacts from "../contacts/Contacts";
import FooterMenuMobile from "./FooterMenuMobile";
import { useDimensions } from "../../hooks/useDimensions";

const Footer = () => {
  const isMobile = useDimensions();

  return (
    <footer className={styles.footerContainer}>
      <div className="container">
        <div className={styles.spaceBetween}>
          <div className={styles.logoContainer}>
            <Logo />
            <div className={styles.copyright}>
              {isMobile ? (
                <>{getCurrentYear()}. Все права защищены</>
              ) : (
                <>
                  Onescloud {getCurrentYear()}. <br /> Все права защищены
                </>
              )}
            </div>
          </div>
          {!isMobile ? (
            <div className={styles.footerContentWrapper}>
              <div className={styles.footerContent}>
                <SocialNetworks
                  socialNetworksWrapper={styles.socialNetworksWrapper}
                />
                <NavMenu
                  navMenuContainer={styles.navMenuContainer}
                  navContent={styles.navContent}
                />
              </div>
              <Contacts contactsWrapper={styles.contactsWrapper} showInFooter />
            </div>
          ) : (
            <FooterMenuMobile />
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
