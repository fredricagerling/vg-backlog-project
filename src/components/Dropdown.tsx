import React from "react";
import styles from "./Dropdown.module.css";
import { MenuItems } from "./MenuItems";

const Dropdown: React.FC<{ onShow: boolean }> = (props) => {
  const dropdown = props.onShow
    ? `${styles.dropdown} ${styles.open}`
    : `${styles.dropdown} ${styles.closed}`;

  return (
    <div className={dropdown}>
      <ul>
        {MenuItems.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
