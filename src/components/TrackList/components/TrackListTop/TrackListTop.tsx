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
import { useLoaderStore } from "@store/useLoaderStore";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";

const TrackListTop = () => {
  const { setShowLoader } = useLoaderStore();
  const { album } = useSelectedAlbumStore();
  const { artistImage } = useSelectedArtistStore();
  const isMobileBreakpoint = useMediaQuery(563);
  const [itemImage, setItemImage] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemArtist, setItemArtist] = useState("");
  const [itemReleaseDate, setItemReleaseDate] = useState("");
  const [itemTracks, setItemTracks] = useState<IAlbumTrack[] | null>(null);
  const [itemTotalDuration, setItemTotalDuration] = useState("");
  const { isTrack } = useSelectedTrackStore();
  const { track } = useSelectedTrackStore();

  useEffect(() => {
    if (album) {
      const { imageUrl, name, artist, releaseDate, tracks } = album;

      setItemImage(imageUrl);
      setItemName(name);
      setItemArtist(artist.name);
      setItemReleaseDate(releaseDate);
      setItemTracks(tracks);
      setItemTotalDuration(formatDuration(getAlbumTotalDuration(tracks)));
    }
  }, [album, setShowLoader]);

  useEffect(() => {
    if (track) {
      const { imageUrl, name, artist, releaseDate } = track;

      setItemImage(imageUrl);
      setItemName(name);
      setItemArtist(artist.name);
      setItemReleaseDate(releaseDate);
    }
  }, [track]);

  return (
    <div className={styles.trackListTop}>
      {(isTrack || album) && (
        <>
          <picture className={styles.albumImage}>
            <img src={itemImage} alt="Album Image" />
          </picture>
          <div className={styles.topText}>
            <p className={styles.type}>{!isTrack ? "Album" : "Song"}</p>
            <h2>{itemName}</h2>
            <h4 className={styles.albumData}>
              {!isMobileBreakpoint && !isTrack ? (
                <>
                  <picture className={styles.artistImage}>
                    <img src={artistImage} alt="artist image" />
                  </picture>
                  <span className={styles.artistName}>{itemArtist}</span>
                  <span className={styles.dot}>•</span>
                  {formatReleaseDate(itemReleaseDate)}
                  <span className={styles.dot}>•</span>{" "}
                  {itemTracks?.length ?? 1}{" "}
                  {itemTracks?.length ? "songs" : "song"},
                  <span className={styles.duration}>
                    {formatAlbumTotalDuration(itemTotalDuration)}
                  </span>
                </>
              ) : (
                <>
                  <picture className={styles.artistImage}>
                    <img src={artistImage} alt="artist image" />
                  </picture>
                  <span className={styles.artistName}>{itemArtist}</span>
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
