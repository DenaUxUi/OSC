import React from "react";
// import clsx from "clsx";
import Slider from "react-slick";
import styles from "./style.module.css";
import TradeSupply from "../../assets/icons/TradeSupply";
import InvestmentStartups from "../../assets/icons/InvestmentStartups";
import ECommerce from "../../assets/icons/ECommerce";
import Accounting from "../../assets/icons/Accounting";
// import AccountingTab from "./AccountingTab";
// import TradeSupplyTab from "./TradeSupplyTab";
// import ECommerceTab from "./ECommerceTab";
// import InvestmentStartupsTab from "./InvestmentStartupsTab";
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

const demoTabs = [
  {
    id: 1,
    Icon: Accounting,
    title: "1С: Бухгалтерия ПРОФ",
    url: "https://ws.onescloud.net/Demo_BP", // добавьте url для всех табов
  },
  {
    id: 2,
    Icon: TradeSupply,
    title: "1С: Управление нашей фирмой",
    url: "https://ws.onescloud.net/Demo_UNF/ru_RU/",
  },
  {
    id: 3,
    Icon: Accounting,
    title: "1С: Зарплата и управление персоналом",
    url: "https://ws.onescloud.net/Demo_ZUP/ru_RU/",
  },
  {
    id: 4,
    Icon: ECommerce,
    title: "1С: Розница ПРОФ",
    url: "https://ws.onescloud.net/Demo_Roznica/ru_RU/",
  },
  {
    id: 5,
    Icon: InvestmentStartups,
    title: "1С: Комплексная автоматизация",
    url: "https://ws.onescloud.net/Demo_KA/ru_RU/",
  },
  {
    id: 6,
    Icon: Accounting,
    title: "1С: Бухгалтерия КОРП",
    url: "https://ws.onescloud.net/Demo_BP_CORP/ru_RU/",
  },
  {
    id: 7,
    Icon: TradeSupply,
    title: "1С: Управление торговлей",
    url: "https://ws.onescloud.net/Demo_UT/ru_RU/",
  },
  {
    id: 8,
    Icon: InvestmentStartups,
    title: "1С: ERP",
    url: "https://ws.onescloud.net/Demo_ERP/ru_RU/",
  },
];

const DemoTabs = () => {
  const isMobile = useDimensions();

  if (isMobile) {
    return (
      <div>
        <Slider {...sliderSettigs} className="tabs-wrapper">
          {demoTabs.map(({ id, Icon, title, url }) => (
            <div key={id}>
              <a
                href={url || "#"}
                className={styles.tabsContentDemo}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Icon />
                <p>{title}</p>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  return (
    <div className={styles.demoTabsContainer}>
      {demoTabs.map(({ id, Icon, title, url }) => (
        <a
          key={id}
          href={url || "#"}
          className={styles.tabsContentDemo}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Icon />
          <p>{title}</p>
        </a>
      ))}
    </div>
  );
};

export default DemoTabs;
