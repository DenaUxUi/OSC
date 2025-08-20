import clsx from "clsx";
import React from "react";
import Statuses from "../../assets/icons/Statuses";
import Accordion from "../../common/accordion/Accordion";
import styles from "./style.module.css";

const data = [
  "Учет хозяйственной деятельности нескольких организаций в единой или нескольких информационных базах",
  "Учет «от документа» и типовые операции",
  "Складской учет",
  "Учет торговых операций",
  "Учет заработной платы",
  "Учет основных средств и нематериальных активов",
  "Учет производства",
  "Возможность сдачи отчетности в электронном виде",
  "Возможность обновления форм отчетности через Интернет",
];

const AccountingProf = () => {
  return (
    <Accordion title="1С: Бухгалтерия ПРОФ в Облаке" defaultOpen>
      <p className={clsx(styles.accordionDescription, styles.mb30)}>
        В 1С:Бухгалтерия реализована возможность введения учетных данных с
        разным уровнем доступа. Для облегчения взаимодействия с программой для
        начинающих пользователей предусмотрен специальный функционал — «помощник
        ввода сведений». С его помощью ввод данных, подготовку отчетов и другие
        операции осуществлять намного проще.
      </p>
      <p className={clsx(styles.accordionDescription, styles.mb40)}>
        Можно вести бухгалтерию на нескольких предприятиях. При этом в одной
        информационной базе можно вести несколько юридических лиц.
      </p>
      <p className={styles.accordionTitle}>
        Основные возможности 1С:Бухгалтерия ПРОФ
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

export default AccountingProf;
