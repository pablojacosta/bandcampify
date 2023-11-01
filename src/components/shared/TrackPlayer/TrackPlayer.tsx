import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import styles from "./TrackPlayer.module.scss";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";

const TrackPlayer = () => {
  const { streamUrl } = useSelectedTrackStore();
  const { trackIndex, isAlbum, playList, setTrackIndex } =
    useSelectedAlbumStore();

  const handleClickPrevious = () => {
    setTrackIndex(trackIndex > 0 ? trackIndex - 1 : 0);
  };

  const handleClickNext = () => {
    if (trackIndex === playList.length - 1) {
      return;
    }

    setTrackIndex(trackIndex + 1);
  };

  return (
    <div className={styles.trackPlayer}>
      <AudioPlayer
        autoPlay
        src={isAlbum ? playList[trackIndex].src : streamUrl}
        className={styles.player}
        showSkipControls
        onEnded={handleClickNext}
        autoPlayAfterSrcChange={true}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        showJumpControls={false}
      />
      <div className={styles.footerSpace} />
    </div>
  );
};

export default TrackPlayer;
