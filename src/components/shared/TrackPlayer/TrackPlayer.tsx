import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import styles from "./TrackPlayer.module.scss";

const TrackPlayer = () => {
  const { trackId } = useSelectedAlbumStore();
  const src = `https://bandcamp.com/EmbeddedPlayer/track=${trackId}/size=medium/bgcol=333333/linkcol=1ed760/artwork=false/transparent=true/`;

  return (
    <div className={styles.trackPlayer}>
      <iframe
        style={{ border: 0, width: 500, height: 150 }}
        src={src}
        seamless
      />
    </div>
  );
};

export default TrackPlayer;
