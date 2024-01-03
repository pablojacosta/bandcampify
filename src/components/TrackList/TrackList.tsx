import styles from "./TrackList.module.scss";
import GoBackButton from "../shared/GoBackButton";
import TrackListTop from "./components/TrackListTop";
import TrackListHeader from "./components/TrackListHeader";
import ListedTracks from "./components/ListedTracks";
import useMediaQuery from "@hooks/useMediaQuery";
import Loader from "@components/shared/Loader";
import { useLoaderStore } from "@store/useLoaderStore";
import { useEffect, useState } from "react";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import { useParams } from "react-router-dom";
import { formatSharedAlbumUrl } from "@utils/helpers/formatSharedAlbumUrl";
import useGetAlbum from "@hooks/useGetAlbum";
import { useNavigate } from "react-router-dom";
import { TRACKS } from "@constants/routes";
import useGetArtistData from "@hooks/useGetArtistData";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import useGetArtistAlbums from "@hooks/useGetArtistAlbums";
import Helmet from "react-helmet";

const TrackList = () => {
  const { showLoader } = useLoaderStore();
  const isMobileBreakpoint = useMediaQuery(563);
  const [isLoading, setIsLoading] = useState(true);
  const { isTrack } = useSelectedTrackStore();
  const { sharedAlbumUrl } = useParams();
  const { getAlbum } = useGetAlbum();
  const { getArtistData } = useGetArtistData();
  const navigate = useNavigate();
  const { setAlbumUrl, album } = useSelectedAlbumStore();
  const { getAlbums } = useGetArtistAlbums();

  useEffect(() => {
    if (showLoader || sharedAlbumUrl) {
      return;
    }

    setIsLoading(false);
  }, [showLoader, sharedAlbumUrl]);

  useEffect(() => {
    if (!sharedAlbumUrl) {
      return;
    }

    const artistName = sharedAlbumUrl.substring(
      0,
      sharedAlbumUrl?.indexOf("---")
    );
    const formattedAlbumUrl = formatSharedAlbumUrl(sharedAlbumUrl);
    const artistUrl = `https://${artistName}.bandcamp.com`;
    getArtistData(artistUrl).then(() =>
      getAlbum(formattedAlbumUrl)
        .then(() => navigate(TRACKS))
        .finally(() => {
          setAlbumUrl(formattedAlbumUrl);
          getAlbums(artistUrl);
        })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sharedAlbumUrl]);

  console.log("-----------------------");
  console.log("album", album);
  console.log("-----------------------");

  return (
    <>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <>
          <Helmet>
            <title>Bandcampify</title>
            <meta name="description" content={album?.artist.name} />
            <meta property="og:title" content={album?.name} />
            <meta property="og:description" content={album?.artist.name} />
            <meta property="og:image" content={album?.imageUrl} />
          </Helmet>
          <div className={styles.trackList}>
            <GoBackButton />
            <TrackListTop />
            {!isMobileBreakpoint && !isTrack && <TrackListHeader />}
            <ListedTracks />
          </div>
        </>
      )}
    </>
  );
};

export default TrackList;
