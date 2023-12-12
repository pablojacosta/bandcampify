import { useEffect, useState } from "react";
import styles from "./Track.module.scss";
import { BiPlay } from "react-icons/bi";
import useMediaQuery from "@hooks/useMediaQuery";
import { ITrack } from "interfaces/track";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import HorizontalLoader from "@components/shared/HorizontalLoader";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import SoundIcon from "@components/elements/Icons/SoundIcon/SoundIcon";
import { useAutoPlayStore } from "@store/useAutoPlayStore";

const Track = ({
  handleOnPlayClick,
  name,
  index,
  duration,
  streamUrl,
}: ITrack) => {
  const [isHovering, setIsHovering] = useState(false);
  const isMobileBreakpoint = useMediaQuery(563);
  const isMobileSmallBreakpoint = useMediaQuery(370);
  const { artistInfo, fetchArtist, artistName } = useSelectedArtistStore();
  const { isTrack } = useSelectedTrackStore();
  const [artistNameForTrack, setArtistNameForTrack] = useState("");
  const [showHorizontalLoader, setShowHorizontalLoader] = useState(true);
  const { trackIndex, isAlbum } = useSelectedAlbumStore();
  const {
    isPlaying,
    playedTrackIndex,
    playedTrackSrc,
    setPauseTrack,
    pauseTrack,
  } = useAutoPlayStore();
  const showIndex =
    (!isHovering && !isPlaying) ||
    (isPlaying && !isHovering && playedTrackSrc !== streamUrl);
  const isSameSrc = playedTrackSrc === streamUrl;
  const showSoundIcon =
    ((isAlbum && trackIndex === index) || isTrack) && isPlaying && isSameSrc;
  const isSameIndex = index === playedTrackIndex;
  const trackIsPlaying = ((isAlbum && isSameIndex) || isTrack) && isSameSrc;

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const isNotPlayingAndNotPaused = !isPlaying && !pauseTrack;
  const isPlayingAndNotPaused = isPlaying && !pauseTrack;
  const isPlayingAndPaused = isPlaying && pauseTrack;
  const isSameAlbumTrack = isAlbum && isSameIndex;
  const isDifferentAlbumTrack = isAlbum && !isSameSrc;
  const isSameTrack = isTrack && isSameSrc;
  const isDifferentTrack = isTrack && !isSameSrc;

  const handleOnClick =
    isNotPlayingAndNotPaused ||
    (isPlayingAndNotPaused && (isDifferentAlbumTrack || isDifferentTrack))
      ? () => handleOnPlayClick()
      : isPlayingAndNotPaused && (isSameTrack || isSameAlbumTrack)
      ? () => setPauseTrack(true)
      : isPlayingAndPaused && (isSameAlbumTrack || isSameTrack)
      ? () => {
          setPauseTrack(false);
          handleOnPlayClick();
        }
      : () => {
          setPauseTrack(false);
          handleOnPlayClick();
        };

  useEffect(() => {
    if (!fetchArtist) {
      return;
    }

    setArtistNameForTrack(artistName);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artistName]);

  useEffect(() => {
    if (fetchArtist) {
      return;
    }

    if (artistInfo) {
      setArtistNameForTrack(artistInfo.name);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artistInfo]);

  useEffect(() => {
    setTimeout(() => setShowHorizontalLoader(false), 3000);
  }, []);

  return (
    <div
      className={`${styles.track} ${trackIsPlaying ? styles.isPlaying : ""}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleOnClick}
    >
      {!isMobileBreakpoint && (
        <div className={styles.trackNumber}>
          {showIndex ? (
            <>{index + 1}</>
          ) : showSoundIcon ? (
            <SoundIcon />
          ) : (
            <span>
              <BiPlay className={styles.play} />
            </span>
          )}
        </div>
      )}
      <div className={styles.names}>
        <p className={styles.songName}>{name}</p>
        {!showHorizontalLoader || !fetchArtist ? (
          <p className={styles.artistName}>{artistNameForTrack}</p>
        ) : (
          <HorizontalLoader />
        )}
      </div>
      {!isMobileSmallBreakpoint && !isTrack && (
        <div className={styles.duration}>
          <p>{duration}</p>
        </div>
      )}
    </div>
  );
};

export default Track;
