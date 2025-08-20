import clsx from "clsx";
import React from "react";
import Statuses from "../../assets/icons/Statuses";
import Accordion from "../../common/accordion/Accordion";
import styles from "./style.module.css";

const data = [
  {
    title: "Вся информация в одном месте",
    description:
      "У каждой номенклатуры есть возможность хранить данные о ставке НДС, артикуле, единицах измерения, стране происхождения, производителе. Также можно указать торговую марку, пол, сезон, размерную шкалу, состав товара и коллекцию. Можно добавить любые собственные реквизиты. А также есть возможность добавить изображение. ",
  },
  {
    title: "Экономия времени",
    description:
      "При использовании ордерной системы на складах и магазинах есть возможность автоматического формирования ордеров. Списание товаров с одного магазина и оприходование в другом осуществляется в момент проведения документа «Перемещение товаров». ",
  },
  {
    title: "Ценообразование",
    description:
      "Цены могут назначаться как для отдельного магазина, так и для всей сети. При этом можно назначить цены на каждую группу номенклатуры. ",
  },
  {
    title: "Для руководителей",
    description:
      "Помогает вести учёт доходов по услугам, продажам, платному обучению, аренде федерального имущества, изготовлению продукции, выполнению работ. ",
  },
];

const RetailStore = () => {
  return (
    <Accordion title="1С: Розница. Магазин одежды и обуви в Облаке">
      <p className={clsx(styles.accordionDescription, styles.mb40)}>
        Данное решение подойдет для розничных бутиков и магазинов и торговых
        сетей, торгующих обувью, одеждой и аксессуарами.
      </p>
      <p className={styles.accordionTitle}>
        Преимущества конфигурации 1С: Розница. Магазин одежды и обуви в Облаке
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

export default RetailStore;
