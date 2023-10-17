import Track from "./components/Track";
import { ITrackList } from "../../interfaces/trackList";
import styles from "./TrackList.module.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import TrackPlayer from "@components/shared/TrackPlayer";
import { getTrackId } from "@utils/helpers/getTrackId";
import { formatDuration } from "@utils/helpers/formatDuration";
import ClockIcon from "@components/elements/Icons/ClockIcon";
import GoBackButton from "./components/GoBackButton";
import TrackListTop from "./components/TrackListTop";

const TrackList = ({ tracks, albumId }: ITrackList) => {
  const { setShowPlayer, showPlayer, setTrackId } = useSelectedAlbumStore();
  const handleOnPlayClick = (trackId: string) => {
    setTrackId(trackId);
    setShowPlayer(true);
  };

  return (
    <div className={styles.trackList}>
      <GoBackButton />
      <TrackListTop />
      <div className={styles.separator}>
        <div className={styles.left}>
          <p className={styles.trackNumber}>#</p>
          <p className={styles.title}>Title</p>
        </div>
        <div className={styles.clock}>
          <ClockIcon />
        </div>
      </div>
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
      {showPlayer && <TrackPlayer />}
    </div>
  );
};

export default TrackList;
