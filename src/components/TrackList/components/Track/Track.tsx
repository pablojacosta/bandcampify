import { useState } from "react";
import { ITrack } from "../../../../interfaces/track";
import styles from "./Track.module.scss";
import { BiPlay } from "react-icons/bi";

const Track = ({ handleOnPlayClick, name, index }: ITrack) => {
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
      onClick={() => handleOnPlayClick()}
    >
      <div className={styles.trackNumber}>
        {!isHovering ? <>{index + 1}</> : <BiPlay className={styles.play} />}
      </div>
      <a>{name}</a>
    </div>
  );
};

export default Track;
