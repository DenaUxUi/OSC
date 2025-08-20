import React from "react";
import styles from "./style.module.css";
import registerIcon from "../../assets/icons/RegisterIcon";
import emailIcon from "../../assets/icons/EmailIcon";
import smallCloudIcon from "../../assets/icons/SmallCloudIcon";
import LongArrowRight from "../../assets/icons/LongArrowRight";
import Button from "../../common/button/Button";
import Key from "../../assets/icons/Key";

const data = [
  {
    Icon: registerIcon,
    title: "Зарегистрируйтесь",
    description: "Заполните данные и выберите подходящую программу 1С",
  },
  {
    Icon: emailIcon,
    title: "Проверьте почту",
    description:
      "После регистрации ссылка для входа будет отправлена Вам на почту",
  },
  {
    Icon: smallCloudIcon,
    title: "Вы в облаке!",
    description: (
      <>
        Начинайте работу в облаке <br /> быстро и просто!
      </>
    ),
  },
];

const GetStartedIn = () => {
  return (
    <div className={styles.getStartedContainer}>
      <div className="container">
        <h2>Как начать работу в</h2>
        <div className={styles.description}>1С в Облаке</div>
        <div className={styles.getStartedContent}>
          {data.map(({ Icon, title, description }) => {
            return (
              <React.Fragment key={title}>
                <div className={styles.cloudWrapper}>
                  <div className={styles.cloudImg}>
                    <Icon />
                    <p>{title}</p>
                  </div>
                  <p className={styles.getStartedDesc}>{description}</p>
                </div>
                <div className={styles.longArrow}>
                  <LongArrowRight />
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <Button
          bgButton={styles.privilegesBtn}
          icons={<Key />}
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
  );
};

export default GetStartedIn;
