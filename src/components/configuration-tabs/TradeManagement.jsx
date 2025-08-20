import clsx from "clsx";
import React from "react";
import Statuses from "../../assets/icons/Statuses";
import Accordion from "../../common/accordion/Accordion";
import styles from "./style.module.css";

const data = [
  "Хранение базы клиентов",
  "Оптимизация маркетинговых тенденций",
  "Управление торговлей, в том числе и региональной",
  "Эффективный складской учет",
  "Отслеживание движения товаров",
  "Контроль над запасами",
  "Своевременность закупок",
  "Регулярный прозрачный финансовый учет",
];

const TradeManagement = ({ defaultOpen }) => {
  return (
    <Accordion
      title="1С: Управление торговлей в Облаке"
      defaultOpen={defaultOpen}
    >
      <p className={clsx(styles.accordionDescription, styles.mb40)}>
        «1С:Управление торговлей 8» — это современный инструмент для повышения
        эффективности бизнеса торгового предприятия. «1С:Управление торговлей 8»
        позволяет в комплексе автоматизировать задачи оперативного и
        управленческого учета, анализа и планирования торговых операций,
        обеспечивая тем самым эффективное управление современным торговым
        предприятием.
      </p>
      <p className={styles.accordionTitle}>
        Основные возможности 1С: Управление торговлей в Облаке
      </p>
      <div className={styles.accordionList}>
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
    </Accordion>
  );
};

export default TradeManagement;
