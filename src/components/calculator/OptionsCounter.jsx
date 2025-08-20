import React from "react";
import clsx from "clsx";
import styles from "./style.module.css";
import Minus from "../../assets/icons/Minus";
import Plus from "../../assets/icons/Plus";

const OptionsCounter = ({
  suffix,
  value = 1,
  onUpdate,
  min,
  max,
  counterWrapper,
  options,
}) => {
  const handleClick =
    (isDecrement = false) =>
    () => {
      const currentIndex = options.findIndex((item) => item === value);
      const nextIndex = isDecrement ? currentIndex - 1 : currentIndex + 1;

      onUpdate(options[nextIndex]);
    };

  return (
    <div className={clsx(styles.counterContent, counterWrapper)}>
      <button
        type="button"
        onClick={handleClick(true)}
        disabled={value === min}
        aria-label="minus"
      >
        <Minus />
      </button>
      <span>
        {value} {suffix}
      </span>
      <button
        type="button"
        onClick={handleClick()}
        disabled={max === value}
        aria-label="plus"
      >
        <Plus />
      </button>
    </div>
  );
};

export default OptionsCounter;
