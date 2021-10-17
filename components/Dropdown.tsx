import React from "react";
import styles from "../styles/Dropdown.module.css";
import { MenuItems } from "./MenuItems";
import Link from "next/link";

const Dropdown: React.FC<{ onShow: boolean }> = (props) => {
  const dropdown = props.onShow
    ? `${styles.dropdown} ${styles.open}`
    : `${styles.dropdown} ${styles.closed}`;

  return (
    <div className={dropdown}>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
