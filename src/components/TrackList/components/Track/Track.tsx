import { useState } from "react";
import styles from "./Track.module.scss";
import { BiPlay } from "react-icons/bi";
import useMediaQuery from "@hooks/useMediaQuery";
import { ITrack } from "interfaces/track";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { useSongsStore } from "@store/useSongsStore";

const Track = ({ handleOnPlayClick, name, index, duration }: ITrack) => {
  const [isHovering, setIsHovering] = useState(false);
  const isMobileBreakpoint = useMediaQuery(563);
  const isMobileSmallBreakpoint = useMediaQuery(370);
  const { artistInfo } = useSelectedArtistStore();
  const { isSong } = useSongsStore();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

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
        <p className={styles.artistName}>{artistInfo?.name}</p>
      </div>
      {!isMobileSmallBreakpoint && !isSong && (
        <div className={styles.duration}>
          <p>{duration}</p>
        </div>
      )}
    </div>
  );
};

export default Track;
