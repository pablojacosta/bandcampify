import Track from "./components/Track";
import { ITrackList } from "../../interfaces/trackList";
import styles from "./TrackList.module.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import TrackPlayer from "@components/shared/TrackPlayer";
import { getTrackId } from "@utils/helpers/getTrackId";
import { formatDuration } from "@utils/helpers/formatDuration";
import { getAlbumTotalDuration } from "@utils/helpers/getAlbumTotalDuration";
import { formatAlbumTotalDuration } from "@utils/helpers/formatAlbumTotalDuration";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import ClockIcon from "@components/elements/Icons/ClockIcon";
import { formatReleaseDate } from "@utils/helpers/formatReleaseDate";
import GoBackButton from "./components/GoBackButton";

const TrackList = ({ tracks, albumId, albumImage }: ITrackList) => {
  const {
    setShowPlayer,
    showPlayer,
    setTrackId,
    albumName,
    albumArtist,
    releaseDate,
  } = useSelectedAlbumStore();
  const { artistImage } = useSelectedArtistStore();
  const handleOnPlayClick = (trackId: string) => {
    setTrackId(trackId);
    setShowPlayer(true);
  };

  const albumTotalDuration = formatDuration(getAlbumTotalDuration(tracks));

  return (
    <div className={styles.trackList}>
      <GoBackButton />
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
            <span className={styles.artistName}>{albumArtist}</span>
            <span className={styles.dot}>•</span>
            {formatReleaseDate(releaseDate)}
            <span className={styles.dot}>•</span> {tracks.length} songs,
            <span className={styles.duration}>
              {formatAlbumTotalDuration(albumTotalDuration)}
            </span>
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
