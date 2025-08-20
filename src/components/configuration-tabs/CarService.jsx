import clsx from "clsx";
import React from "react";
import Statuses from "../../assets/icons/Statuses";
import Accordion from "../../common/accordion/Accordion";
import styles from "./style.module.css";

const data = [
  {
    title: "Автоматизация учёта",
    description:
      "Автоматизируйте автомобильный бизнес с помощью системы, в которой предусмотрены контроль выполнения заказа, продаж, распределение загрузки и рабочего времени сотрудников.",
  },
  {
    title: "Встроенная CRM-система",
    description:
      "Контролируйте взаимодействие с новыми и постоянными клиентами. Настройте с ними эффективную коммуникацию с помощью СМС и почтовой рассылки. Повышайте лояльность заказчиков, повышая качество обслуживания.",
  },
  {
    title: "Анализ эффективности",
    description:
      "Оценивайте эффективность работ, доходы и расходы, рентабельность операций и финансовое состояние компании с помощью полных и глубоких отчетов, встроенных в программу для ведения автосервиса. ",
  },
];

const CarService = () => {
  return (
    <Accordion title="1С: Автосервис в Облаке ">
      <p className={clsx(styles.accordionDescription, styles.mb40)}>
        Идеальное решение для автоматизации учёта в автосервисах, автомойках,
        станциях технического обслуживания автомобилей! Доступна загрузка данных
        из Silver-Dat II, Автонормы, Autodata, Autodata online. Используйте
        программу для автоматизации учета, ведения CRM-системы, анализа
        эффективности работы автосервиса, автомойки или СТО. Решение создано на
        основе конфигурации 1С: УНФ и предоставляет такие возможности.
      </p>
      <p className={styles.accordionTitle}>
        Основные возможности 1С: Автосервис в Облаке
      </p>
      <div className={styles.accordionList}>
        <ul>
          {data.map((item) => {
            return (
              <React.Fragment key={item.title}>
                <li>
                  <Statuses />
                  <p>{item.title}</p>
                </li>
                <p className={clsx(styles.accordionDescription, styles.mb16)}>
                  {item.description}
                </p>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </Accordion>
  );
};

export default CarService;
