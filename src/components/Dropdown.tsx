import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import styles from "./Dropdown.module.css";

const Dropdown: React.FC = () => {

  return (
    <div className={styles["dropdown-menu"]}>
      <ul>
        <li>hello</li>
        <li>hello2</li>
        <li>hello3</li>
        <li>hello4</li>
      </ul>
    </div>
  );
};

export default Dropdown;
