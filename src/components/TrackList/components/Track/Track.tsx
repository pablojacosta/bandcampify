import { useState } from "react";
import { ITrack } from "../../../../interfaces/track";
import styles from "./Track.module.scss";
import { BiPlay } from "react-icons/bi";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import useMediaQuery from "@hooks/useMediaQuery";

const Track = ({ handleOnPlayClick, name, index, duration }: ITrack) => {
  const [isHovering, setIsHovering] = useState(false);
  const { albumArtist } = useSelectedAlbumStore();
  const isMobileBreakpoint = useMediaQuery(563);
  const isMobileSmallBreakpoint = useMediaQuery(370);

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
        <p className={styles.artistName}>{albumArtist}</p>
      </div>
      {!isMobileSmallBreakpoint && (
        <div className={styles.duration}>
          <p>{duration}</p>
        </div>
      )}
    </div>
  );
};

export default Track;
