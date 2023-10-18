import styles from "./TrackList.module.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import TrackPlayer from "@components/shared/TrackPlayer";
import GoBackButton from "./components/GoBackButton";
import TrackListTop from "./components/TrackListTop";
import TrackListHeader from "./components/TrackListHeader";
import ListedTracks from "./components/ListedTracks";
import useMediaQuery from "@hooks/useMediaQuery";
import Loader from "@components/shared/Loader";
import { useLoaderStore } from "@store/useLoaderStore";
import { useEffect, useState } from "react";
import { useSongsStore } from "@store/useSongsStore";

const TrackList = () => {
  const { showLoader } = useLoaderStore();
  const { showPlayer } = useSelectedAlbumStore();
  const isMobileBreakpoint = useMediaQuery(563);
  const [isLoading, setIsLoading] = useState(true);
  const { isSong } = useSongsStore();

  useEffect(() => {
    if (showLoader) {
      return;
    }

    setIsLoading(false);
  }, [showLoader]);

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
          {!isMobileBreakpoint && !isSong && <TrackListHeader />}
          <ListedTracks />
          {showPlayer && <TrackPlayer />}
        </div>
      )}
    </>
  );
};

export default TrackList;
