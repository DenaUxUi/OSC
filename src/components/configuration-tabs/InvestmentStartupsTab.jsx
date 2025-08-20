import React from "react";
import AccountingProf from "./AccountingProf";
import ManagementOurCompany from "./ManagementOurCompany";
import styles from "./style.module.css";

const InvestmentStartupsTab = () => {
  return (
    <div className={styles.investmentStartupsTab}>
      <p className={styles.accountingTabTitle}>
        Список конфигураций для <span>Инвестиций и стартапов:</span>
      </p>
      <AccountingProf />
      <ManagementOurCompany />
    </div>
  );
};

export default InvestmentStartupsTab;
