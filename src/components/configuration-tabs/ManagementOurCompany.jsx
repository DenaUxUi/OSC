import clsx from "clsx";
import React from "react";
import Statuses from "../../assets/icons/Statuses";
import Accordion from "../../common/accordion/Accordion";
import styles from "./style.module.css";

const data = [
  "Торговля и Розница",
  "Интеграция с ЕГАИС и ГИСМ",
  "Создание сайта в 1 клик",
  "Склад и закупки, Производство",
  "Отчетность ИП",
  "Анализ бизнеса",
  "Типовая интеграция с популярными системами управления сайтами (CMS): 1С-Битрикс, UMI.CMS, InSales, HostCMS, Rugento, Diafan.CMS, Shop-Script",
  "Создание единой базы заказов вне зависимости от источника их поступления (заказы с сайта, заказы, оформленные в магазине, по телефону или по электронной почте)",
  "Актуальная информация на вашем сайте о наличии и стоимости товаров",
  "Товары и их изображения, цены и остатки выгружаются на сайт автоматически",
  "Регулярный автоматический обмен с программой 1С:УНФ сведет обслуживание сайта к минимуму",
];

const badges = [
  "Торговля и розница ",
  "Отчетность ИП ",
  "Анализ бизнеса ",
  "Интеграция с ЕГАИС и ГИСМ ",
  "Создание сайта в 1 клик ",
  "Склад и закупки, производство ",
];

const ManagementOurCompany = ({ defaultOpen }) => {
  return (
    <Accordion
      title="1С: Управление нашей фирмой в Облаке "
      defaultOpen={defaultOpen}
    >
      <p className={clsx(styles.accordionDescription, styles.mb40)}>
        В одной программе: продажи, закупки, склад, деньги, зарплата,
        производство, CRM и бизнес-аналитика для принятия верных управленческих
        решений.
      </p>
      <p className={styles.accordionTitle}>
        Основные возможности 1С: Управление нашей фирмой в Облаке
      </p>
      <div className={clsx(styles.accordionList, styles.mb40)}>
        <ul>
          {data.map((item) => {
            return (
              <li key={Math.random()}>
                <Statuses />
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <p className={styles.accordionTitle}>
        Основные возможности 1С: Управление нашей фирмой в Облаке
      </p>
      <div className={styles.badgesContainer}>
        {badges.map((item) => {
          return (
            <div key={Math.random()} className={styles.badgesContent}>
              <Statuses />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </Accordion>
  );
};

export default ManagementOurCompany;
