import React, { Fragment, useState } from "react";
import styles from "../styles/Sidebar.module.css";
import { MenuItems } from "./MenuItems";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Fragment>
      <nav className={styles.sidebar}>
        <ul className={styles["nav-links"]}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.path}>
                  <a
                    className={
                      router.pathname == `${item.path}`
                        ? `${styles.active}`
                        : ""
                    }
                  >
                    {item.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
