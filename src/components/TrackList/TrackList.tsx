import Track from "./components/Track";
import { ITrackList } from "../../interfaces/trackList";
import styles from "./TrackList.module.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import TrackPlayer from "./components/TrackPlayer";

const TrackList = ({
  tracks,
  artist,
  albumId,
  albumName,
  albumUrl,
  albumImage,
}: ITrackList) => {
  const { setShowPlayer, showPlayer } = useSelectedAlbumStore();
  const handleOnPlayClick = () => {
    setShowPlayer(true);
  };

  return (
    <div className={styles.trackList}>
      <picture>
        <img src={albumImage} alt="Album Image" />
      </picture>
      <ul>
        {tracks.map((track, index) => (
          <li key={`${albumId}_${track.name}`}>
            <Track
              handleOnPlayClick={() => handleOnPlayClick()}
              name={track.name}
              artist={artist}
              albumId={albumId}
              albumName={albumName}
              albumUrl={albumUrl}
              index={index}
            />
          </li>
        ))}
      </ul>
      {showPlayer && <TrackPlayer />}
    </div>
  );
};

export default TrackList;
