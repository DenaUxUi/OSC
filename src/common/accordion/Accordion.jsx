import React, { useState } from "react";
import clsx from "clsx";
import styles from "./style.module.css";
import accountingAccordion from "../../assets/images/accounting-accordion.png";
import Plus from "../../assets/icons/Plus";
import Minus from "../../assets/icons/Minus";

const Accordion = ({ defaultOpen = false, title, children }) => {
  const [isOpenAccordion, setOpenAccordion] = useState(defaultOpen);

  const handleToggleAccordion = () => {
    setOpenAccordion((prev) => !prev);
  };
  return (
    <div className={styles.accordionWrapper} onClick={handleToggleAccordion}>
      <div
        className={clsx(styles.accordionContainer, {
          [styles.accordionActive]: isOpenAccordion,
        })}
      >
        <div className={styles.dFlex}>
          <img src={accountingAccordion} alt="Preview" />
          <div className={styles.title}>{title}</div>
        </div>
        <div
          className={clsx(styles.btnContainer, {
            [styles.btnActive]: !isOpenAccordion,
          })}
        >
          {!isOpenAccordion ? <span>Развернуть</span> : <span>Свернуть</span>}
          <div
            className={clsx(styles.markContainer, {
              [styles.markBlue]: !isOpenAccordion,
            })}
          >
            {!isOpenAccordion ? <Plus /> : <Minus />}
          </div>
        </div>
      </div>
      {isOpenAccordion && (
        <div className={styles.accordionContent}>{children}</div>
      )}
    </div>
  );
};

export default Accordion;
