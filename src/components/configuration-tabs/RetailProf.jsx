import clsx from "clsx";
import React from "react";
import Statuses from "../../assets/icons/Statuses";
import Accordion from "../../common/accordion/Accordion";
import styles from "./style.module.css";

const data = [
  "Учёт прихода товаров от контрагента на склады магазинах",
  "Перемещение товаров между магазинами, внутренними складами",
  "Ведение торговли комплектами товаров",
  "Учёт возврата товаров от покупателей",
  "Проведение инвентаризации товарных запасов",
  "Оформление приходных и расходных кассовых ордеров",
  "Перемещение денежных средств между магазинами, кассами (магазинов и предприятий)",
  "Формирование процентных скидок с разделением по магазинам",
  "Поддержка торгового оборудования (фискальные регистраторы, терминалы сбора данных, дисплеи покупателя и т.д.)",
];

const badges = [
  "Дисплеи покупателя",
  "Электронные весы с печатью этикеток",
  "Сканеры штрихкода",
  "Фискальные регистраторы",
  "Считыватели магнитных карт",
  "RFID Считыватели",
  "Терминалы сбора данных",
  "ККМ, подключаемые в режиме Offline",
];

const RetailProf = () => {
  return (
    <Accordion title="1С: Розница ПРОФ в Облаке">
      <p className={clsx(styles.accordionDescription, styles.mb40)}>
        Конфигурация «Розница» предназначена для автоматизации бизнес-процессов
        магазинов, которые могут входить в распределенную розничную сеть
        торгового предприятия. Может использоваться для автоматизации магазинов
        с большим количеством рабочих мест, в том числе и в качестве кассовой
        программы.
      </p>
      <p className={styles.accordionTitle}>
        Основные возможности 1С: Розница 8 ПРОФ в Облаке
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
        Так же - реализована возможность работы с торговым оборудованием:
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

export default RetailProf;
