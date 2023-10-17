import { formatDuration } from "@utils/helpers/formatDuration";
import styles from "./ListedTracks.module.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { getTrackId } from "@utils/helpers/getTrackId";
import Track from "../Track";

const ListedTracks = () => {
  const { setShowPlayer, setTrackId, albumId, tracks } =
    useSelectedAlbumStore();
  const handleOnPlayClick = (trackId: string) => {
    setTrackId(trackId);
    setShowPlayer(true);
  };

  return (
    <div className={styles.listedTracks}>
      {tracks && (
        <ul>
          {tracks.map((track, index) => (
            <li key={`${albumId}_${track.name}`}>
              <Track
                handleOnPlayClick={() =>
                  handleOnPlayClick(getTrackId(track.streamUrl))
                }
                name={track.name}
                index={index}
                duration={formatDuration(track.duration)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListedTracks;
