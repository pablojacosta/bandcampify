import Track from "./components/Track";
import { ITrackList } from "../../interfaces/trackList";
import styles from "./TrackList.module.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import TrackPlayer from "@components/shared/TrackPlayer";
import { ETrackPlayerType } from "@constants/enums";

const TrackList = ({
  tracks,
  artist,
  albumId,
  albumName,
  albumUrl,
  albumImage,
}: ITrackList) => {
  const { setShowPlayer, showPlayer, setTrackId } = useSelectedAlbumStore();
  const handleOnPlayClick = (trackId: number) => {
    setTrackId(trackId);
    setShowPlayer(true);
  };

  return (
    <div className={styles.trackList}>
      <picture>
        <img src={albumImage} alt="Album Image" />
      </picture>
      <ul>
        {tracks.map((track, index) => {
          console.log("track", track);

          return (
            <li key={`${albumId}_${track.name}`}>
              <Track
                handleOnPlayClick={() => handleOnPlayClick(track.id)}
                name={track.name}
                artist={artist}
                albumId={albumId}
                albumName={albumName}
                albumUrl={albumUrl}
                index={index}
                id={track.id}
                duration={track.duration}
              />
            </li>
          );
        })}
      </ul>
      {showPlayer && <TrackPlayer type={ETrackPlayerType.ALBUM} />}
    </div>
  );
};

export default TrackList;
