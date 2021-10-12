import styles from "./years.module.css";

const Years = () => {
  return (
    <div className={styles.content}>
      <ul className={styles["year-nav"]}>
        <li>2010</li>
        <li>2011</li>
        <li>2012</li>
        <li>2013</li>
        <li>2014</li>
        <li>2015</li>
        <li>2016</li>
        <li>2017</li>
        <li>2018</li>
        <li>2019</li>
        <li>2020</li>
        <li>2021</li>
      </ul>
    </div>
  );
};

export default Years;
