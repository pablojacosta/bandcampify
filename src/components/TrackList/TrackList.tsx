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

const TrackList = () => {
  const { showLoader } = useLoaderStore();
  const isMobileBreakpoint = useMediaQuery(563);
  const [isLoading, setIsLoading] = useState(true);
  const { isTrack } = useSelectedTrackStore();
  const { sharedAlbumUrl } = useParams();
  const { getAlbum } = useGetAlbum();
  const { getArtistData } = useGetArtistData();
  const navigate = useNavigate();

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
    getArtistData(`https://${artistName}.bandcamp.com`);
    getAlbum(formatSharedAlbumUrl(sharedAlbumUrl)).then(() => navigate(TRACKS));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sharedAlbumUrl]);

  return (
    <>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <div className={styles.trackList}>
          <GoBackButton />
          <TrackListTop />
          {!isMobileBreakpoint && !isTrack && <TrackListHeader />}
          <ListedTracks />
        </div>
      )}
    </>
  );
};

export default TrackList;
