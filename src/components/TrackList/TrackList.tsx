import Track from "../Track";
import { ITrackList } from "../../interfaces/trackList";
import styles from "./TrackList.module.scss";

const TrackList = ({
  tracks,
  handleTrackPlayClick,
  artist,
  albumId,
  albumName,
  albumUrl,
}: ITrackList) => {
  return (
    <ul className={styles.trackList}>
      {tracks.map((track, index) => (
        <li key={track.id}>
          <Track
            handleTrackPlayClick={handleTrackPlayClick}
            name={track.name}
            id={track.id}
            artist={artist}
            albumId={albumId}
            albumName={albumName}
            albumUrl={albumUrl}
            index={index}
          />
        </li>
      ))}
    </ul>
  );
};

export default TrackList;
