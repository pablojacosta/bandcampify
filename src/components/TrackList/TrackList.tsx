import Track from "./components/Track";
import { ITrackList } from "../../interfaces/trackList";
import styles from "./TrackList.module.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import TrackPlayer from "@components/shared/TrackPlayer";
import { getTrackId } from "@utils/helpers/getTrackId";
import { formatDuration } from "@utils/helpers/formatDuration";
import LeftArrow from "@components/elements/Icons/LeftArrow";
import { useNavigate } from "react-router-dom";

const TrackList = ({ tracks, albumId, albumImage }: ITrackList) => {
  const {
    setShowPlayer,
    showPlayer,
    setTrackId,
    setHideAlbums,
    setHasAlbums,
    setShowTrackList,
  } = useSelectedAlbumStore();
  const handleOnPlayClick = (trackId: string) => {
    setTrackId(trackId);
    setShowPlayer(true);
  };
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    setHasAlbums(true);
    setHideAlbums(false);
    setShowTrackList(false);
    setShowPlayer(false);
    navigate(-1);
  };

  return (
    <div className={styles.trackList}>
      <div className={styles.goBackButton}>
        <button onClick={handleGoBackClick}>
          <LeftArrow />
          Go Back
        </button>
      </div>
      <picture>
        <img src={albumImage} alt="Album Image" />
      </picture>
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
