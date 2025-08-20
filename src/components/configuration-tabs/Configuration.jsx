import React from "react";
import styles from "./style.module.css";
import Tabs from "./Tabs";
import moreConfiguration from "../../assets/images/more-configuration.png";
import DemoTabs from "./DemoTabs";
// import Button from "../../common/button/Button";
// import AcademicCap from "../../assets/icons/AcademicCap";
// import { useDimensions } from "../../hooks/useDimensions";

const Configuration = () => {
  // const isMobile = useDimensions();

  return (
    <div className={styles.configurationContainer} id="configuration">
      <div className="container">
        <div className={styles.titleContainer}>
          <h2>О конфигурациях</h2>
          <span />
          {/* {!isMobile && (
            <Button
              icons={<AcademicCap />}
              iconsWrapper={styles.academicCapContainer}
              bgButton={styles.btnKnowledgeBase}
              onClick={() => {
                window.location.href = "https://onescloud.net/knowledge/";
              }}
            >
              База знаний
            </Button>
          )} */}
        </div>
        <div className={styles.subtitle}>1С в Облаке</div>
        <div className={styles.subtitle}>
          <Tabs />
        </div>
        {/* {isMobile && (
          <Button
            icons={<AcademicCap />}
            iconsWrapper={styles.academicCapContainer}
            bgButton={styles.btnKnowledgeBase}
            onClick={() => {
              window.location.href = "https://onescloud.net/knowledge/";
            }}
          >
            База знаний
          </Button>
        )} */}
        <div className={styles.titleContainer}>
          <h2>Демо-версии</h2>
          <span />
        </div>
        <div className={styles.subtitle}>1С в Облаке</div>
        <DemoTabs />
        <div className={styles.tabsItem}>
          <div className={styles.eCommerceTab}>
            <p className={styles.accountingTabTitle}>
              Доступ в базу по <span>любому</span> из предлагаемых пользователей{" "}
              <span>без пароля</span>
            </p>
          </div>
        </div>
        <div className={styles.moreConfiguration}>
          <h2>
            Более 50 конфигураций
            <br />
            <span>для удалённого управления торговлей и услугами!</span>
          </h2>
          <img src={moreConfiguration} alt="Preview" />
        </div>
      </div>
    </div>
  );
};

export default Configuration;
