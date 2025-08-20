import React, { useMemo, useState } from "react";
import Switch from "react-switch";
import clsx from "clsx";
import styles from "./style.module.css";
import BigCalculator from "../../assets/icons/BigCalculator";
import { switches } from "./data";
import Checkbox from "../../common/checkbox/Checkbox";
import Counter from "./Counter";
import Button from "../../common/button/Button";
import Key from "../../assets/icons/Key";
import DefaultCheck from "../../assets/icons/DefaultCheck";
import Opinions from "../advantages/Opinions";
import aboutConfiguration from "../../assets/images/about-configuration.png";
import OptionsCounter from "./OptionsCounter";
import Tooltip from "./Tooltip";

// const discountMap = {
//   1: 1,
//   3: 0.95,
//   6: 0.9,
//   12: 0.85,
// };

const accessMethodTip = () => {
  return (
    <div>
      <span>Веб-браузер, тонкий клиент: </span>
      <br />
      открываете ссылку в браузере, указываете логин/пароль и работаете в 1С на
      любом устройстве. Либо устанавливаете официальное приложение от 1С и
      работаете через него.
      <br />
      <br />
      <span> Удаленный рабочий стол (RDP):</span>
      <br />у Вас будет доступ к конфигуратору 1С, а также будет возможность
      создавать и хранить любые документы на подключенном сетевом диске, который
      является общим для всех пользователей клиента.
    </div>
  );
};

const usersTip = () => {
  return (
    <div>
      Количество пользователей, которые одновременно могут работать в базе или
      на удалённом рабочем столе.
    </div>
  );
};

const diskSpace = () => {
  return (
    <div>
      На компанию выдается <span>бесплатно 10 Гб,</span> каждые последующие 10
      Гб – 200 руб.
    </div>
  );
};

// const leaseTerm = () => {
//   return (
//     <div>
//       Вы можете оплачивать помесячно или удобными периодами. Оптом – дешевле!
//       <span> Скидка</span> при оплате за 3 месяца – 5%, 6 месяцев – 10%, 12
//       месяцев – 15%
//     </div>
//   );
// };

const Calculator = () => {
  const [checkedSwitch, setCheckedSwitch] = useState(
    switches.filter((item) => item.id === 1)
  );
  const [rdp, setRDP] = useState(false);
  const [usersCounter, setUsersCounter] = useState(1);
  const [memoryCounter, setMemoryCounter] = useState(10);
  const [monthCounter, setMonthCounter] = useState(1);

  const handleToggleSwitch = (item) => () => {
    const existingElement = checkedSwitch.find((el) => item.id === el.id);
    if (existingElement) {
      setCheckedSwitch((prev) => {
        return prev.filter((el) => el.id !== existingElement.id);
      });
    } else {
      setCheckedSwitch((prev) => [...prev, item]);
    }
  };

  const handleRDP = () => {
    setRDP((prev) => !prev);
  };

  const monthCount = useMemo(() => {
    if (monthCounter === 1) {
      return <>месяц</>;
    }
    if (monthCounter === 3) {
      return <>месяца</>;
    }
    return <>месяцев</>;
  }, [monthCounter]);

  const updatedPrice = useMemo(() => {
    const priceMode = rdp ? "rdp" : "web";

    const maxValue = checkedSwitch.reduce((acc, next) => {
      if (next[priceMode] > acc) {
        return next[priceMode];
      }
      return acc;
    }, 0);

    const memoryValue = maxValue ? ((memoryCounter - 10) / 10) * 200 : 0;

    if (checkedSwitch.length > 2) {
      return (
        (maxValue * usersCounter +
          (checkedSwitch.length - 2) * 200 +
          memoryValue)
          // * discountMap[monthCounter]
      );
    }
    return (
      (maxValue * usersCounter + memoryValue)
      // * discountMap[monthCounter] || 0
    );
  }, [rdp, checkedSwitch, usersCounter, memoryCounter]);

  return (
    <div className={styles.calculatorContainer} id="calculator">
      <div className="container">
        <div className={styles.calculatorContent}>
          <div className={styles.leftContent}>
            <div className={styles.titleWrapper}>
              <h2>Калькулятор тарифа</h2>
              <BigCalculator />
            </div>
            <div className={styles.subtitle}>1С в Облаке</div>
            <p className={styles.chooseConfiguration}>
              Выберите конфигурацию <span> ({checkedSwitch.length})</span>
            </p>
            <div className={styles.switchesContainer}>
              {switches.map((item) => {
                const isChecked = checkedSwitch.some((el) => el.id === item.id);

                return (
                  <div
                    key={item.id}
                    className={clsx(styles.switchContent, {
                      [styles.switchChecked]: isChecked,
                    })}
                  >
                    <p>{item.title}</p>
                    <Switch
                      checked={isChecked}
                      onChange={handleToggleSwitch(item)}
                      onColor="#FF405B"
                      onHandleColor="#ffffff"
                      handleDiameter={8}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      height={16}
                      width={32}
                      disabled={item.disabled}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.rightContentTop}>
              <div className={styles.infoContainer}>
                <p className={styles.infoTitle}>Способ доступа</p>
                <Tooltip getContent={accessMethodTip} id="accessMethod" />
              </div>
              <div className={styles.checkboxContainer}>
                <div className={styles.defaultCheckbox}>
                  <DefaultCheck />
                  <p> Веб-браузер, тонкий клиент</p>
                </div>
                <Checkbox checked={rdp} onChange={handleRDP}>
                  Удаленный рабочий стол
                </Checkbox>
              </div>
              <div className={styles.counterContainer}>
                <div>
                  <div className={styles.infoContainer}>
                    <p className={styles.infoTitle}>Пользователей</p>
                    <Tooltip getContent={usersTip} id="users" place="top" />
                  </div>
                  <Counter
                    step={1}
                    value={usersCounter}
                    onUpdate={setUsersCounter}
                    min={1}
                  />
                </div>
                <div>
                  <div className={styles.infoContainer}>
                    <p className={styles.infoTitle}>Место на диске</p>
                    <Tooltip
                      getContent={diskSpace}
                      id="diskSpace"
                      place="top"
                    />
                  </div>
                  <Counter
                    step={10}
                    value={memoryCounter}
                    onUpdate={setMemoryCounter}
                    suffix="ГБ"
                    min={10}
                  />
                </div>
              </div>
              <div className={styles.monthContainer}>
                <div className={styles.infoContainer}>
                  <p className={styles.infoTitle}>Срок аренды</p>
                  {/* <Tooltip getContent={leaseTerm} id="leaseTerm" place="top" /> */}
                </div>
                <OptionsCounter
                  value={monthCounter}
                  onUpdate={setMonthCounter}
                  suffix={monthCount}
                  min={1}
                  max={12}
                  counterWrapper={styles.w100}
                  options={[1, 3, 6, 12]}
                />
              </div>
            </div>
            <div className={styles.rightContentBottom}>
              <div className={styles.priceContainer}>
                <div className={styles.price}>
                  {updatedPrice}
                  <span> ₽</span>
                </div>
                <p>в месяц</p>
              </div>
              <div className={styles.accessContainer}>
                <Button icons={<Key />}
                  iconsWrapper={styles.likeContainer}
                  onClick={() => {
                    const target = document.getElementById("pop-up-button");
                    target.click();
                  }}>
                  Получить доступ
                </Button>
              </div>
              <Button
                bgButton={styles.freeDaysWrapper}
                onClick={() => {
                  const target = document.getElementById("pop-up-button");
                  target.click();
                }}>
                <p className={styles.freeDays}>14 дней бесплатно!</p>
              </Button>
            </div>
          </div>
        </div>
        {/* Opinions Section For Mobile */}
        <div className={styles.opinionsWrapper}>
          <Opinions />
          <img src={aboutConfiguration} alt="Preview" />
        </div>
      </div>
      {/* End Of Opinions Section For Mobile */}
    </div>
  );
};

export default Calculator;
