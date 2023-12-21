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
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { formatSharedAlbumUrl } from "@utils/helpers/formatSharedAlbumUrl";

const TrackList = () => {
  const { showLoader } = useLoaderStore();
  const isMobileBreakpoint = useMediaQuery(563);
  const [isLoading, setIsLoading] = useState(true);
  const { isTrack } = useSelectedTrackStore();
  const { albumUrl } = useParams();
  const { setAlbumUrl } = useSelectedAlbumStore();

  useEffect(() => {
    if (showLoader) {
      return;
    }

    setIsLoading(false);
  }, [showLoader]);

  useEffect(() => {
    if (!albumUrl) {
      return;
    }

    setAlbumUrl(formatSharedAlbumUrl(albumUrl));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albumUrl]);

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
