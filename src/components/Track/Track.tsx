import { useState } from "react";
import { ITrack } from "../../interfaces/track";
import styles from "./Track.module.scss";
import { BiPlay } from "react-icons/bi";

const Track = ({
  handleTrackPlayClick,
  name,
  id,
  artist,
  albumId,
  albumName,
  albumUrl,
  index,
}: ITrack) => {
  const [isHovering, setIsHovering] = useState(false);

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
    >
      <div className={styles.trackNumber}>
        {!isHovering ? <>{index + 1}</> : <BiPlay className={styles.play} />}
      </div>
      <a
        onClick={() =>
          handleTrackPlayClick(artist, albumId, albumName, albumUrl, id)
        }
      >
        {name}
      </a>
    </div>
  );
};

export default Track;
