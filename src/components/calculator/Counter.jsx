import React from "react";
import clsx from "clsx";
import styles from "./style.module.css";
import Minus from "../../assets/icons/Minus";
import Plus from "../../assets/icons/Plus";

const Counter = ({
  suffix,
  value = 1,
  onUpdate,
  step = 1,
  min,
  max,
  counterWrapper,
}) => {
  const handleClick =
    (isDecrement = false) =>
    () => {
      const innerStep = isDecrement ? step * -1 : step;
      const newValue = value + innerStep;
      onUpdate(newValue);
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

export default Counter;
