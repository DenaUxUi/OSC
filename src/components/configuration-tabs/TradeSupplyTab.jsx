import React from "react";
import CarService from "./CarService";
import ManagementOurCompany from "./ManagementOurCompany";
import RetailProf from "./RetailProf";
import RetailStore from "./RetailStore";
import styles from "./style.module.css";
import TradeManagement from "./TradeManagement";

const TradeSupplyTab = () => {
  return (
    <div className={styles.tradeSupplyTab}>
      <p className={styles.accountingTabTitle}>
        Список конфигураций для <span>Торговли и снабжения:</span>
      </p>
      <TradeManagement defaultOpen />
      <RetailProf />
      <ManagementOurCompany />
      <RetailStore />
      <CarService />
    </div>
  );
};

export default TradeSupplyTab;
