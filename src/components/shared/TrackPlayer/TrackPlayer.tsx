import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import styles from "./TrackPlayer.module.scss";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";

const TrackPlayer = () => {
  const { streamUrl } = useSelectedTrackStore();
  const { trackIndex, isAlbum, playList } = useSelectedAlbumStore();

  return (
    <div className={styles.trackPlayer}>
      <AudioPlayer
        autoPlay
        src={isAlbum ? playList[trackIndex].src : streamUrl}
        className={styles.player}
        showSkipControls
      />
      <div className={styles.footerSpace} />
    </div>
  );
};

export default TrackPlayer;
