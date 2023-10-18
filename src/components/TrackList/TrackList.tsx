import styles from "./TrackList.module.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import TrackPlayer from "@components/shared/TrackPlayer";

import GoBackButton from "./components/GoBackButton";
import TrackListTop from "./components/TrackListTop";
import TrackListHeader from "./components/TrackListHeader";
import ListedTracks from "./components/ListedTracks";
import useMediaQuery from "@hooks/useMediaQuery";

const TrackList = () => {
  const { showPlayer } = useSelectedAlbumStore();
  const isMobileBreakpoint = useMediaQuery(563);

  return (
    <div className={styles.trackList}>
      <GoBackButton />
      <TrackListTop />
      {!isMobileBreakpoint && <TrackListHeader />}
      <ListedTracks />
      {showPlayer && <TrackPlayer />}
    </div>
  );
};

export default TrackList;
