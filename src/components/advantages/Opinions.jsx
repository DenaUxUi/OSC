import React from "react";
import useBreakpoint from "use-breakpoint";
import styles from "./style.module.css";
import Statuses from "../../assets/icons/Statuses";
import QuestionMark from "../../assets/icons/QuestionMark";
import ThreeDots from "../../assets/icons/ThreeDots";
import { BREAKPOINTS } from "../../constants";

const Opinions = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const isMobile = ["smallMobile", "mobile"].includes(breakpoint);
  return (
    <div className={styles.opinionsContainer}>
      <div className={styles.opinionItem}>
        <Statuses width="24" height="24" />
        <p>Бухгалтерия?{isMobile && <br />} Конечно 1С в Облаке!</p>
      </div>
      <div className={styles.opinionItem}>
        <QuestionMark />
        <p>Нанять дополнительных сотрудников... </p>
      </div>
      <div className={styles.opinionItem}>
        <QuestionMark />
        <p>Провести встречу с очень важным клиентом... </p>
      </div>
      <ThreeDots />
    </div>
  );
};

export default Opinions;
