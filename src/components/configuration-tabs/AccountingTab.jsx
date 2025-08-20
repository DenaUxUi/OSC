import React from "react";
import AccountingCorp from "./AccountingCorp";
import AccountingProf from "./AccountingProf";
import ManagementOurCompany from "./ManagementOurCompany";
import SalaryPersonnelManagement from "./SalaryPersonnelManagement";
import styles from "./style.module.css";

const AccountingTab = () => {
  return (
    <div className={styles.accountingTab}>
      <p className={styles.accountingTabTitle}>
        Список конфигураций для <span>Бухгалтерского и налогового учёта:</span>
      </p>
      <AccountingProf />
      <AccountingCorp />
      <SalaryPersonnelManagement />
      <ManagementOurCompany />
    </div>
  );
};

export default AccountingTab;
