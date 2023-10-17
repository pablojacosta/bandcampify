import styles from "./TrackList.module.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import TrackPlayer from "@components/shared/TrackPlayer";

import GoBackButton from "./components/GoBackButton";
import TrackListTop from "./components/TrackListTop";
import TrackListHeader from "./components/TrackListHeader";
import ListedTracks from "./components/ListedTracks";

const TrackList = () => {
  const { showPlayer } = useSelectedAlbumStore();

  return (
    <div className={styles.trackList}>
      <GoBackButton />
      <TrackListTop />
      <TrackListHeader />
      <ListedTracks />
      {showPlayer && <TrackPlayer />}
    </div>
  );
};

export default TrackList;
