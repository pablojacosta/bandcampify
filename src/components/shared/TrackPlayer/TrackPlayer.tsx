import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import styles from "./TrackPlayer.module.scss";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { useAutoPlayStore } from "@store/useAutoPlayStore";
import { useEffect, useRef, useState } from "react";
import MaximizeIcon from "@components/elements/Icons/MaximizeIcon";
import MinimizeIcon from "@components/elements/Icons/MinimizeIcon";
import useMediaQuery from "@hooks/useMediaQuery";

const TrackPlayer = () => {
  const { streamUrl, track } = useSelectedTrackStore();
  const { trackIndex, isAlbum, playList, setTrackIndex, album } =
    useSelectedAlbumStore();
  const { setIsPlaying, pauseTrack, playedArtistName, playedTrackName } =
    useAutoPlayStore();
  const src = isAlbum ? playList[trackIndex].src : streamUrl;
  const player = useRef<AudioPlayer | null>(null);
  const albumIsPlaying = isAlbum && album;
  const trackIsPlaying = !isAlbum && track;
  const [artistName, setArtistName] = useState("");
  const [trackName, setTrackName] = useState("");
  const [isMaximized, setIsMaximized] = useState(true);
  const isMobileBreakpoint = useMediaQuery(463);

  const handleClickPrevious = () => {
    setTrackIndex(trackIndex > 0 ? trackIndex - 1 : 0);
  };

  const handleClickNext = () => {
    if (trackIndex === playList.length - 1) {
      return;
    }

    setTrackIndex(trackIndex + 1);
  };

  useEffect(() => {
    if (!pauseTrack) {
      player.current?.audio.current?.play();
      return;
    }

    player.current?.audio.current?.pause();
  }, [pauseTrack]);

  useEffect(() => {
    if (!albumIsPlaying && !trackIsPlaying) {
      return;
    }

    if (albumIsPlaying) {
      setArtistName(album.artist.name);
      setTrackName(album.tracks[trackIndex].name);
    }

    if (trackIsPlaying) {
      setArtistName(track.artist.name);
      setTrackName(track.name);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return (
    <div
      className={`${styles.trackPlayer} ${
        !isMaximized ? styles.isMinimized : ""
      }`}
    >
      <div
        className={`${styles.details} ${
          !isMaximized ? styles.isMinimized : ""
        }`}
      >
        <p>
          {isMaximized && !isMobileBreakpoint
            ? `${playedArtistName} - ${playedTrackName}`
            : `${playedTrackName}`}
        </p>
        <div
          onClick={() => setIsMaximized((prevState) => !prevState)}
          className={styles.sizeIcon}
        >
          {isMaximized ? <MinimizeIcon /> : <MaximizeIcon />}
        </div>
      </div>
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
        onPlay={() =>
          setIsPlaying(true, trackIndex, src, artistName, trackName)
        }
        onPause={() =>
          setIsPlaying(false, trackIndex, src, artistName, trackName)
        }
        ref={player}
        style={
          !isMaximized
            ? {
                width: "300px",
              }
            : undefined
        }
      />
      <div className={styles.footerSpace} />
    </div>
  );
};

export default TrackPlayer;
