import clsx from "clsx";
import React from "react";
import Statuses from "../../assets/icons/Statuses";
import Accordion from "../../common/accordion/Accordion";
import Button from "../../common/button/Button";
import styles from "./style.module.css";

const data = [
  "Возможность вести учет по нескольким филиалам в единой информационной базе, вне зависимости от того, выделены эти подразделения на отдельный баланс или нет",
  "Полноценный документооборот между обособленными филиалами",
  "Отдельные подразделения могут иметь свой адрес и телефон. Так же можно указывать ответственных лиц и другие необходимые данные, которые фигурируют в документах данного подразделения",
  "Доступны расчеты в рамках государственных контрактов",
  "Есть отчетность некредитных финансовых организаций",
  "Функция отчетности контролируемых иностранных компаний",
];

const AccountingCorp = () => {
  return (
    <Accordion title="1С: Бухгалтерия КОРП в Облаке">
      <p className={clsx(styles.accordionDescription, styles.mb24)}>
        Решение предназначено для автоматизации бухгалтерского и налогового
        учета, включая подготовку обязательной (регламентированной) отчетности в
        организации. Бухгалтерский и налоговый учет ведется в соответствии с
        действующим законодательством Российской Федерации.
      </p>

      <p className={styles.accordionTitle}>
        Основные возможности 1С:Бухгалтерия КОРП
      </p>
      <Button bgButton={styles.accordionBtn}>
        Все опции 1С: Бухгалтерия 8.3 ПРОФ в Облаке плюс:
      </Button>
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

export default AccountingCorp;
