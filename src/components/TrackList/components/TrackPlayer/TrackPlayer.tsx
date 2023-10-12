/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import styles from "./TrackPlayer.module.scss";

const TrackPlayer = () => {
  const { albumId, trackId } = useSelectedAlbumStore();

  return (
    <div className={styles.trackPlayer}>
      <iframe
        style={{ border: 0, width: 500, height: 150 }}
        src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=medium/bgcol=333333/linkcol=e6682b/artwork=false/track=${trackId}/transparent=true/`}
        seamless
      ></iframe>
    </div>
  );
};

export default TrackPlayer;
