import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import styles from "./Dropdown.module.css";

const Dropdown: React.FC<{ onShow: boolean }> = (props) => {
  const dropdown = props.onShow
    ? `${styles.dropdown} ${styles.open}`
    : `${styles.dropdown} ${styles.closed}`;

  return (
    <div className={dropdown}>
      <ul>
        <li>hello1</li>
        <li>hello2</li>
        <li>hello3</li>
        <li>hello4</li>
      </ul>
    </div>
  );
};

export default Dropdown;
