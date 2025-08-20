import React from "react";
import clsx from "clsx";
import styles from "./style.module.css";
import Envelope from "../../assets/icons/Envelope";
import Phone from "../../assets/icons/Phone";
import Consultation from "./Consultation";
import { useDimensions } from "../../hooks/useDimensions";

const Contacts = ({
  contactsWrapper,
  consultation,
  showInFooter = false,
  bottomNavWrapper,
}) => {
  const isMobile = useDimensions();

  return (
    <div className={bottomNavWrapper}>
      <div className={clsx(styles.contactsContainer, contactsWrapper)}>
        <div className={styles.contactsContent}>
          <Envelope />
          <a href="mailto:info@onescloud.net">info@onescloud.net</a>
        </div>
        <div className={styles.contactsContent}>
          <Phone />
          <a href="tel:+7 (499) 450-60-66">+7 (499) 450-60-66</a>
        </div>
        <div className={styles.contactsContent}>
          <Phone />
          <a href="tel:8 (800) 302-33-18">8 (800) 302-33-18</a>
        </div>
        {showInFooter && !isMobile && (
          <Consultation consultation={consultation} />
        )}
      </div>
      {!showInFooter && (
        <Consultation
          consultation={consultation}
          consultationWrapper={styles.consultationWrapper}
        />
      )}
    </div>
  );
};

export default Contacts;
