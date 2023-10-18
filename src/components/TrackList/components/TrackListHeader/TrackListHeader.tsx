import styles from "./TrackListHeader.module.scss";
import ClockIcon from "@components/elements/Icons/ClockIcon";

const TrackListHeader = () => {
  return (
    <div className={styles.trackListHeader}>
      <div className={styles.left}>
        <p className={styles.trackNumber}>#</p>
        <p className={styles.title}>Title</p>
      </div>
      <div className={styles.clock}>
        <ClockIcon />
      </div>
    </div>
  );
};

export default TrackListHeader;
