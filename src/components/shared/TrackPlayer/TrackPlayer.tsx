import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import styles from "./TrackPlayer.module.scss";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

const TrackPlayer = () => {
  const { streamUrl } = useSelectedTrackStore();

  return (
    <div className={styles.trackPlayer}>
      <AudioPlayer autoPlay src={streamUrl} className={styles.player} />
      <div className={styles.footerSpace} />
    </div>
  );
};

export default TrackPlayer;
