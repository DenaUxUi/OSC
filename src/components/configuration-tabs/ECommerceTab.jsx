import React from "react";
import ManagementOurCompany from "./ManagementOurCompany";
import RetailProf from "./RetailProf";
import RetailStore from "./RetailStore";
import styles from "./style.module.css";
import TradeManagement from "./TradeManagement";

const ECommerceTab = () => {
  return (
    <div className={styles.eCommerceTab}>
      <p className={styles.accountingTabTitle}>
        Список конфигураций для <span>Электронной коммерцие:</span>
      </p>
      <ManagementOurCompany defaultOpen />
      <RetailProf />
      <RetailStore />
      <TradeManagement />
    </div>
  );
};

export default ECommerceTab;
