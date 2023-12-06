import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import styles from "./TrackPlayer.module.scss";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { useAutoPlayStore } from "@store/useAutoPlayStore";
import { useEffect, useRef } from "react";

const TrackPlayer = () => {
  const { streamUrl } = useSelectedTrackStore();
  const { trackIndex, isAlbum, playList, setTrackIndex } =
    useSelectedAlbumStore();
  const { setIsPlaying, pauseTrack } = useAutoPlayStore();
  const src = isAlbum ? playList[trackIndex].src : streamUrl;
  const player = useRef<AudioPlayer | null>(null);

  const handleClickPrevious = () => {
    setTrackIndex(trackIndex > 0 ? trackIndex - 1 : 0);
  };

  const handleClickNext = () => {
    if (trackIndex === playList.length - 1) {
      return;
    }

    setTrackIndex(trackIndex + 1);
  };

  console.log("pauseTrack", pauseTrack);

  useEffect(() => {
    if (!pauseTrack) {
      return;
    }

    player.current?.audio.current?.pause();
  }, [pauseTrack]);

  return (
    <div className={styles.trackPlayer}>
      <AudioPlayer
        autoPlay
        src={src}
        className={styles.player}
        showSkipControls
        onEnded={handleClickNext}
        autoPlayAfterSrcChange={true}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        showJumpControls={false}
        onPlay={() => setIsPlaying(true, trackIndex, src)}
        onPause={() => setIsPlaying(false, trackIndex, src)}
        ref={player}
      />
      <div className={styles.footerSpace} />
    </div>
  );
};

export default TrackPlayer;
