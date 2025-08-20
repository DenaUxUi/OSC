import React from "react";
import useBreakpoint from "use-breakpoint";
import Proposition from "./Proposition";
import styles from "./style.module.css";
import AcademicCap from "../../assets/icons/AcademicCap";
import ShoppingBag from "../../assets/icons/ShoppingBag";
import CursorClick from "../../assets/icons/CursorClick";
import Cash from "../../assets/icons/Cash";
import ClipboardCheck from "../../assets/icons/ClipboardCheck";
import { BREAKPOINTS } from "../../constants";
import PropositionSlider from "./PropositionSlider";
import QuicklyIcon from "../../assets/icons/QuicklyIcon";
import AvailableIcon from "../../assets/icons/AvailableIcon";
import ComfortableIcon from "../../assets/icons/ComfortableIcon";
import Button from "../../common/button/Button";
import Like from "../../assets/icons/Like";
import CloudCompanyLogo from "../../assets/icons/CloudCompanyLogo";
import aboutConfiguration from "../../assets/images/about-configuration.png";
import Opinions from "./Opinions";
import GetStartedIn from "./GetStartedIn";

const privileges = [
  {
    Icon: QuicklyIcon,
    title: "Быстро",
    description: "старт за 15 минут",
  },
  {
    Icon: AvailableIcon,
    title: "Доступно",
    description: "тарифы от 1230 ₽",
  },
  {
    Icon: ComfortableIcon,
    title: "Удобно",
    description: "поддержка 24/7",
  },
];

const Advantages = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const isMobile = ["smallMobile", "mobile", "bigMobile", "tablet"].includes(
    breakpoint
  );

  return (
    <>
      <div className={styles.advantagesContainer}>
        <div className="container">
          <h2>Основные преимущества</h2>
          <div className={styles.description}>1С в Облаке</div>
          {!isMobile ? (
            <div className={styles.advantagesContent}>
              <div className={styles.leftBlock}>
                <Proposition
                  icon={<AcademicCap />}
                  description="Огромная база знаний, самоучитель
              и вебинары по 1С - в доступе"
                />
                <Proposition
                  icon={<ShoppingBag />}
                  description="Возможность
              интеграции с системой CRM"
                  propositionContainer={styles.propositionWidth}
                />
              </div>
              <div className={styles.centerBlock}>
                <Proposition
                  icon={<CursorClick />}
                  description="1С в Облаке доступна всегда.
              Гарантируем в договоре."
                />
              </div>
              <div className={styles.rightBlock}>
                <Proposition
                  icon={<Cash />}
                  description="Никаких первоначальных затрат
              на серверы, лицензии и установку."
                />
                <Proposition
                  icon={<ClipboardCheck />}
                  description="Сдача отчёта прямо из 1С.
              Всегда в срок и без стресса"
                  propositionContainer={styles.propositionWidth}
                />
              </div>
            </div>
          ) : (
            <PropositionSlider />
          )}
        </div>
      </div>
      <GetStartedIn />
      <div className={styles.gradientWrapper}>
        {/* Privileges Section */}
        <div className={styles.privilegesContainer}>
          <div className="container">
            <h2>
              Выбирая 1С в Облаке
              <br />
              <span>Вы экономите от 80 000 рублей!</span>
            </h2>
            <div className={styles.privilegesContent}>
              {privileges.map(({ Icon, title, description }) => {
                return (
                  <div key={title} className={styles.privilegesItem}>
                    <Icon />
                    <div className={styles.privilegesTitle}>{title}</div>
                    <div className={styles.privilegesDescription}>
                      {description}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className={styles.completelyRemote}>
              Вам не нужно покупать локальную 1С, заключать договор
              обслуживания, увеличивать производительность компьютеров, покупать
              сервер и устройства резервирования.
              <span> Полностью удалённо, от 1230 ₽!</span>
            </p>
            <Button
              bgButton={styles.privilegesBtn}
              icons={<Like />}
              iconsWrapper={styles.likeContainer}
              onClick={() => {
                const target = document.getElementById("pop-up-button");
                target.click();
              }}
            >
              Попробуйте бесплатно!
            </Button>
          </div>
        </div>
        {/* End Of Privileges Section */}

        {/* Cloud Section */}
        <div className={styles.cloudContainer}>
          <div className="container">
            <div className={styles.cloudContent}>
              <div className={styles.cloudLeft}>
                <CloudCompanyLogo />
                <h2>
                  Быстро, просто, удалённо. <br />
                  <span> Бухгалтерия и учёт 1С в Облаке!</span>
                </h2>
                <p>
                  От стартапов - до торговых компаний, огромный выбор
                  конфигураций 1С в Облаке подойдёт даже для самых амбициозных
                  задач.
                </p>
              </div>
              <div className={styles.cloudRight}>
                <Opinions />
                <img src={aboutConfiguration} alt="Preview" />
              </div>
            </div>
          </div>
        </div>
        {/* End Of Cloud Section */}
      </div>
    </>
  );
};

export default Advantages;
