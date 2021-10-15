import styles from "../styles/BurgerMenu.module.css";
import React, { useState } from "react";

const BurgerMenu: React.FC<{ openMenu: any }> = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
    props.openMenu();
  };

  return (
    <div className={styles.burger} onClick={openMenuHandler}>
      <div className={openMenu ? `${styles.line1}` : ""}></div>
      <div className={openMenu ? `${styles.line2}` : ""}></div>
      <div className={openMenu ? `${styles.line3}` : ""}></div>
    </div>
  );
};

export default BurgerMenu;
