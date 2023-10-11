import { ITrack } from "../../interfaces/track";
import styles from "./Track.module.scss";

const Track = ({
  handleTrackPlayClick,
  name,
  id,
  artist,
  albumId,
  albumName,
  albumUrl,
  index,
}: ITrack) => {
  return (
    <div className={styles.track}>
      <p>{index + 1} </p>
      <a
        onClick={() =>
          handleTrackPlayClick(artist, albumId, albumName, albumUrl, id)
        }
      >
        {name}
      </a>
    </div>
  );
};

export default Track;
