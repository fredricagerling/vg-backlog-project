import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles["main-header"]}>
      <nav className={styles.navbar}>
        <ul className={styles["navbar-item-list"]}>
          <li>Home</li>
          <li>Hej</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
