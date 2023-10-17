import Track from "./components/Track";
import { ITrackList } from "../../interfaces/trackList";
import styles from "./TrackList.module.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import TrackPlayer from "@components/shared/TrackPlayer";
import { getTrackId } from "@utils/helpers/getTrackId";
import { formatDuration } from "@utils/helpers/formatDuration";
import LeftArrow from "@components/elements/Icons/LeftArrow";
import { Link } from "react-router-dom";
import { getAlbumTotalDuration } from "@utils/helpers/getAlbumTotalDuration";
import { formatAlbumTotalDuration } from "@utils/helpers/formatAlbumTotalDuration";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import ClockIcon from "@components/elements/Icons/ClockIcon";

const TrackList = ({ tracks, albumId, albumImage }: ITrackList) => {
  const {
    setShowPlayer,
    showPlayer,
    setTrackId,
    setHideAlbums,
    setHasAlbums,
    setShowTrackList,
    albumName,
    albumArtist,
  } = useSelectedAlbumStore();
  const { artistImage } = useSelectedArtistStore();
  const handleOnPlayClick = (trackId: string) => {
    setTrackId(trackId);
    setShowPlayer(true);
  };

  const handleGoBackClick = () => {
    setHasAlbums(true);
    setHideAlbums(false);
    setShowTrackList(false);
    setShowPlayer(false);
  };

  const albumTotalDuration = formatDuration(getAlbumTotalDuration(tracks));

  return (
    <div className={styles.trackList}>
      <div className={styles.goBackButton}>
        <Link to="/">
          <button onClick={handleGoBackClick}>
            <LeftArrow />
          </button>
        </Link>
      </div>
      <div className={styles.top}>
        <picture>
          <img src={albumImage} alt="Album Image" />
        </picture>
        <div className={styles.topText}>
          <p className={styles.type}>Album</p>
          <h2>{albumName}</h2>
          <h4 className={styles.albumData}>
            <picture className={styles.artistImage}>
              <img src={artistImage} alt="artist image" />
            </picture>
            <span>{albumArtist}</span> • {tracks.length} songs,{" "}
            {formatAlbumTotalDuration(albumTotalDuration)}
          </h4>
        </div>
      </div>
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
