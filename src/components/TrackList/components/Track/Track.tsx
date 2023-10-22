import { useEffect, useState } from "react";
import styles from "./Track.module.scss";
import { BiPlay } from "react-icons/bi";
import useMediaQuery from "@hooks/useMediaQuery";
import { ITrack } from "interfaces/track";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import HorizontalLoader from "@components/shared/HorizontalLoader";

const Track = ({ handleOnPlayClick, name, index, duration }: ITrack) => {
  const [isHovering, setIsHovering] = useState(false);
  const isMobileBreakpoint = useMediaQuery(563);
  const isMobileSmallBreakpoint = useMediaQuery(370);
  const { artistInfo, fetchArtist, artistName } = useSelectedArtistStore();
  const { isTrack } = useSelectedTrackStore();
  const [artistNameForTrack, setArtistNameForTrack] = useState("");
  const [showHorizontalLoader, setShowHorizontalLoader] = useState(true);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
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
      className={styles.track}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={() => handleOnPlayClick()}
    >
      {!isMobileBreakpoint && (
        <div className={styles.trackNumber}>
          {!isHovering ? <>{index + 1}</> : <BiPlay className={styles.play} />}
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
