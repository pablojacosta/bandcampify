import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.skChase}>
        <div className={styles.skChaseDot}></div>
        <div className={styles.skChaseDot}></div>
        <div className={styles.skChaseDot}></div>
        <div className={styles.skChaseDot}></div>
        <div className={styles.skChaseDot}></div>
        <div className={styles.skChaseDot}></div>
      </div>
    </div>
  );
};

export default Loader;
