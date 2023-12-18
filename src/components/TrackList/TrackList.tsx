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
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";

const TrackList = () => {
  const { showLoader } = useLoaderStore();

  const isMobileBreakpoint = useMediaQuery(563);
  const [isLoading, setIsLoading] = useState(true);
  const { isTrack } = useSelectedTrackStore();
  const { albumUrl } = useSelectedAlbumStore();

  useEffect(() => {
    if (showLoader) {
      return;
    }

    setIsLoading(false);
  }, [showLoader]);

  console.log("albumUrl", albumUrl);

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
