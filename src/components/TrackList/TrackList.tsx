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
    <div className={styles.trackList}>
      <ul>
        {tracks.map((track, index) => (
          <li key={`${albumId}_${track.name}`}>
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
    </div>
  );
};

export default TrackList;
