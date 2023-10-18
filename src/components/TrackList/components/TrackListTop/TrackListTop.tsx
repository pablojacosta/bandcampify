import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import styles from "./TrackListTop.module.scss";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { formatReleaseDate } from "@utils/helpers/formatReleaseDate";
import { formatAlbumTotalDuration } from "@utils/helpers/formatAlbumTotalDuration";
import { formatDuration } from "@utils/helpers/formatDuration";
import { getAlbumTotalDuration } from "@utils/helpers/getAlbumTotalDuration";
import useMediaQuery from "@hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { IAlbumTrack } from "interfaces/albumTrack";

const TrackListTop = () => {
  const { album } = useSelectedAlbumStore();
  const { artistImage } = useSelectedArtistStore();
  const isMobileBreakpoint = useMediaQuery(563);
  const [albumImage, setAlbumImage] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [albumArtist, setAlbumArtist] = useState("");
  const [albumReleaseDate, setAlbumReleaseDate] = useState("");
  const [albumTracks, setAlbumTracks] = useState<IAlbumTrack[] | null>(null);
  const [albumTotalDuration, setAlbumTotalDuration] = useState("");

  useEffect(() => {
    if (!album) {
      return;
    }

    const { imageUrl, name, artist, releaseDate, tracks } = album;

    setAlbumImage(imageUrl);
    setAlbumName(name);
    setAlbumArtist(artist.name);
    setAlbumReleaseDate(releaseDate);
    setAlbumTracks(tracks);
    setAlbumTotalDuration(formatDuration(getAlbumTotalDuration(tracks)));
  }, [album]);

  return (
    <div className={styles.trackListTop}>
      {album && (
        <>
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
                  {formatReleaseDate(albumReleaseDate)}
                  <span className={styles.dot}>•</span> {albumTracks?.length}
                  songs,
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
        </>
      )}
    </div>
  );
};

export default TrackListTop;
