import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import styles from "./TrackListTop.module.scss";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { formatReleaseDate } from "@utils/helpers/formatReleaseDate";
import { formatAlbumTotalDuration } from "@utils/helpers/formatAlbumTotalDuration";
import { formatDuration } from "@utils/helpers/formatDuration";
import { getAlbumTotalDuration } from "@utils/helpers/getAlbumTotalDuration";
import useMediaQuery from "@hooks/useMediaQuery";

const TrackListTop = () => {
  const { albumName, albumArtist, releaseDate, albumImage, tracks } =
    useSelectedAlbumStore();
  const { artistImage } = useSelectedArtistStore();
  const albumTotalDuration = formatDuration(getAlbumTotalDuration(tracks!));
  const isMobileBreakpoint = useMediaQuery(563);

  return (
    <div className={styles.trackListTop}>
      <picture className={styles.albumImage}>
        <img src={albumImage} alt="Album Image" />
      </picture>
      <div className={styles.topText}>
        <p className={styles.type}>Album</p>
        <h2>{albumName}</h2>
        <h4 className={styles.albumData}>
          {!isMobileBreakpoint ? (
            <>
              <picture className={styles.artistImage}>
                <img src={artistImage} alt="artist image" />
              </picture>
              <span className={styles.artistName}>{albumArtist}</span>
              <span className={styles.dot}>•</span>
              {formatReleaseDate(releaseDate)}
              <span className={styles.dot}>•</span> {tracks?.length} songs,
              <span className={styles.duration}>
                {formatAlbumTotalDuration(albumTotalDuration)}
              </span>
            </>
          ) : (
            <>
              <picture className={styles.artistImage}>
                <img src={artistImage} alt="artist image" />
              </picture>
              <span className={styles.artistName}>{albumArtist}</span>
            </>
          )}
        </h4>
      </div>
    </div>
  );
};

export default TrackListTop;
