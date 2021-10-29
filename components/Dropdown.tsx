import React from "react";
import styles from "../styles/Dropdown.module.css";
import Link from "next/link";

const Dropdown: React.FC<{ onShow: boolean }> = (props) => {
  const dropdown = props.onShow
    ? `${styles.dropdown} ${styles.open}`
    : `${styles.dropdown} ${styles.closed}`;

  return (
    <div className={dropdown}>
      <ul>
        
      </ul>
    </div>
  );
};

export default Dropdown;
