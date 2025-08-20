import React from "react";
import ActiveCheck from "../../assets/icons/ActiveCheck";
import Unchecked from "../../assets/icons/Unchecked";
import styles from "./style.module.css";

const Checkbox = ({ children, id, name, value, onChange, checked }) => {
  return (
    <div className={styles.checkboxContent}>
      <label htmlFor={id}>
        <div className={styles.pRelative}>
          {checked ? <ActiveCheck /> : <Unchecked />}
          <input
            type="checkbox"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            checked={checked}
            className={styles.inputUncheck}
          />
        </div>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
