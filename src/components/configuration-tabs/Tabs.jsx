import React, { useMemo, useState } from "react";
import clsx from "clsx";
import Slider from "react-slick";
import styles from "./style.module.css";
import TradeSupply from "../../assets/icons/TradeSupply";
import InvestmentStartups from "../../assets/icons/InvestmentStartups";
import ECommerce from "../../assets/icons/ECommerce";
import Accounting from "../../assets/icons/Accounting";
import AccountingTab from "./AccountingTab";
import TradeSupplyTab from "./TradeSupplyTab";
import ECommerceTab from "./ECommerceTab";
import InvestmentStartupsTab from "./InvestmentStartupsTab";
import { useDimensions } from "../../hooks/useDimensions";

const sliderSettigs = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "10px",
};

const tabs = [
  {
    id: 1,
    Icon: Accounting,
    title: "Бухгалтерский и налоговый учёт",
  },
  {
    id: 2,
    Icon: TradeSupply,
    title: "Торговля и снабжение",
  },
  {
    id: 3,
    Icon: ECommerce,
    title: "Электронная коммерция",
  },
  {
    id: 4,
    Icon: InvestmentStartups,
    title: "Инвистиции и стартапы",
  },
];

const Tabs = () => {
  const [isActiveTab, setActiveTab] = useState(1);

  const handleActiveTab = (id) => () => {
    setActiveTab(id);
  };
  const isMobile = useDimensions();

  const TabsWrapper = useMemo(() => {
    if (isMobile) {
      return Slider;
    }
    return React.Fragment;
  }, [isMobile]);

  return (
    <>
      <div className={styles.tabsContainer}>
        <TabsWrapper
          {...(isMobile && {
            ...sliderSettigs,
            className: "tabs-wrapper",
          })}
        >
          {tabs.map(({ id, Icon, title }) => {
            return (
              <div
                key={id}
                className={clsx(styles.tabsContent, {
                  [styles.tabsActive]: isActiveTab === id,
                })}
                onClick={handleActiveTab(id)}
              >
                <Icon />
                <p>{title}</p>
              </div>
            );
          })}
        </TabsWrapper>
      </div>
      <div className={styles.tabsItem}>
        {
          {
            1: <AccountingTab />,
            2: <TradeSupplyTab />,
            3: <ECommerceTab />,
            4: <InvestmentStartupsTab />,
          }[isActiveTab]
        }
      </div>
    </>
  );
};

export default Tabs;
