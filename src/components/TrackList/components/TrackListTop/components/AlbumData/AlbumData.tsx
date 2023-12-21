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
import { CopyToClipboard } from "react-copy-to-clipboard";
import HorizontalLoader from "@components/shared/HorizontalLoader";
import { Link } from "react-router-dom";
import { ALBUMS } from "@constants/routes";
import useGetAlbumsForArtist from "@hooks/useGetAlbumsForArtist";
import ShareIcon from "@components/elements/Icons/ShareIcon";
import { formatAlbumUrlForShareLink } from "@utils/helpers/formatAlbumUrlForShareLink";

const AlbumData = () => {
  const isMobileBreakpoint = useMediaQuery(563);
  const { isTrack } = useSelectedTrackStore();
  const { album, albumUrl } = useSelectedAlbumStore();
  const { artistImage, artistName, fetchArtist } = useSelectedArtistStore();
  const [itemArtist, setItemArtist] = useState("");
  const [itemReleaseDate, setItemReleaseDate] = useState("");
  const [itemTracks, setItemTracks] = useState<IAlbumTrack[] | null>(null);
  const [itemTotalDuration, setItemTotalDuration] = useState("");
  const { track } = useSelectedTrackStore();
  const [showHorizontalLoader, setShowHorizontalLoader] = useState(true);
  const { getAlbumsForArtist } = useGetAlbumsForArtist();

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
      const artistNameForTracklist = fetchArtist ? artistName : artist.name;

      setItemArtist(artistNameForTracklist);
      setItemReleaseDate(releaseDate);
    }
  }, [track, fetchArtist, artistName]);

  useEffect(() => {
    setTimeout(() => setShowHorizontalLoader(false), 3000);
  }, []);

  return (
    <>
      {!showHorizontalLoader || !fetchArtist ? (
        <h4 className={styles.albumData}>
          {!isMobileBreakpoint && !isTrack ? (
            <>
              <picture className={styles.artistImage}>
                <img src={artistImage} alt="artist image" />
              </picture>
              <span className={styles.artistName}>
                <Link
                  to={ALBUMS}
                  onClick={() => getAlbumsForArtist(itemArtist)}
                >
                  {itemArtist}
                </Link>
              </span>
              <span className={styles.dot}>•</span>
              {formatReleaseDate(itemReleaseDate)}
              <span className={styles.dot}>•</span> {itemTracks?.length ?? 1}{" "}
              {itemTracks?.length ? "songs" : "song"},
              <span className={styles.duration}>
                {formatAlbumTotalDuration(itemTotalDuration)}
              </span>
              <CopyToClipboard text={formatAlbumUrlForShareLink(albumUrl)}>
                <span className={styles.shareIcon}>
                  <ShareIcon />
                </span>
              </CopyToClipboard>
            </>
          ) : (
            <>
              <picture className={styles.artistImage}>
                <img src={artistImage} alt="artist image" />
              </picture>
              <span className={styles.artistName}>
                <Link
                  to={ALBUMS}
                  onClick={() => getAlbumsForArtist(itemArtist)}
                >
                  {itemArtist}
                </Link>
              </span>
            </>
          )}
        </h4>
      ) : (
        <HorizontalLoader />
      )}
    </>
  );
};

export default AlbumData;
