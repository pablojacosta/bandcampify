import { useEffect, useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import styles from "./AlbumData.module.scss";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import { formatReleaseDate } from "@utils/helpers/formatReleaseDate";
import { formatAlbumTotalDuration } from "@utils/helpers/formatAlbumTotalDuration";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { IAlbumTrack } from "interfaces/albumTrack";
import { formatDuration } from "@utils/helpers/formatDuration";
import { getAlbumTotalDuration } from "@utils/helpers/getAlbumTotalDuration";

const AlbumData = () => {
  const isMobileBreakpoint = useMediaQuery(563);
  const { isTrack } = useSelectedTrackStore();
  const { album } = useSelectedAlbumStore();
  const { artistImage, artistName, fetchArtist } = useSelectedArtistStore();
  const [itemArtist, setItemArtist] = useState("");
  const [itemReleaseDate, setItemReleaseDate] = useState("");
  const [itemTracks, setItemTracks] = useState<IAlbumTrack[] | null>(null);
  const [itemTotalDuration, setItemTotalDuration] = useState("");
  const { track } = useSelectedTrackStore();

  useEffect(() => {
    if (album) {
      const { artist, releaseDate, tracks } = album;
      const artistNameForTracklist = fetchArtist ? artistName : artist.name;

      setItemArtist(artistNameForTracklist);
      setItemReleaseDate(releaseDate);
      setItemTracks(tracks);
      setItemTotalDuration(formatDuration(getAlbumTotalDuration(tracks)));
    }
  }, [album, fetchArtist, artistName]);

  useEffect(() => {
    if (track) {
      const { artist, releaseDate } = track;

      setItemArtist(artist.name);
      setItemReleaseDate(releaseDate);
    }
  }, [track]);

  return (
    <h4 className={styles.albumData}>
      {!isMobileBreakpoint && !isTrack ? (
        <>
          <picture className={styles.artistImage}>
            <img src={artistImage} alt="artist image" />
          </picture>
          <span className={styles.artistName}>{itemArtist}</span>
          <span className={styles.dot}>•</span>
          {formatReleaseDate(itemReleaseDate)}
          <span className={styles.dot}>•</span> {itemTracks?.length ?? 1}{" "}
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
  );
};

export default AlbumData;
