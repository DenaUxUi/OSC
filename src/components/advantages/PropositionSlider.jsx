import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AcademicCap from "../../assets/icons/AcademicCap";
import ShoppingBag from "../../assets/icons/ShoppingBag";
import CursorClick from "../../assets/icons/CursorClick";
import Cash from "../../assets/icons/Cash";
import ClipboardCheck from "../../assets/icons/ClipboardCheck";
import Proposition from "./Proposition";
import styles from "./style.module.css";

const propositions = [
  {
    Icon: CursorClick,
    description: `1С в Облаке доступна всегда.
Гарантируем в договоре.`,
  },
  {
    Icon: AcademicCap,
    description: `Огромная база знаний, самоучитель
    и вебинары по 1С - в доступе`,
  },
  {
    Icon: ShoppingBag,
    description: `Возможность
    интеграции с системой CRM`,
  },
  {
    Icon: Cash,
    description: `Никаких первоначальных затрат
    на серверы, лицензии и установку.`,
  },
  {
    Icon: ClipboardCheck,
    description: `Сдача отчёта прямо из 1С.
    Всегда в срок и без стресса`,
  },
];

const sliderSettigs = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
};

const PropositionSlider = () => {
  return (
    <div className={styles.sliderProposition}>
      <Slider {...sliderSettigs}>
        {propositions.map(({ Icon, description }) => {
          return (
            <div key={description} className={styles.contentCenter}>
              <Proposition
                icon={<Icon />}
                description={description}
                propositionContainer={styles.sliderPropositionContainer}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PropositionSlider;
