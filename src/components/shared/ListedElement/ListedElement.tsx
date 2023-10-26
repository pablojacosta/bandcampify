import { IListedElement } from "interfaces/listedElement";
import styles from "./ListedElement.module.scss";
import { BiPlay } from "react-icons/bi";
import { EListedElementTypes } from "@constants/enums";

const ListedElement = ({
  onClick,
  name,
  image,
  type,
  artist,
  album,
}: IListedElement) => {
  const isTrack = type === EListedElementTypes.TRACK;
  const iconStyle = {
    color: !isTrack ? "black" : "white",
    fontSize: "2rem",
    paddingLeft: "0.15rem",
  };
  const tag = !isTrack ? type : artist ? artist : album?.substring(3);

  return (
    <div className={styles.listedElement}>
      <li onClick={onClick}>
        <div className={styles.content}>
          <picture>
            <img src={image} alt="Listed Element Image" />
          </picture>
          <div className={styles.text}>
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>{tag}</p>
            <div className={styles.playButton}>
              <BiPlay style={iconStyle} />
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default ListedElement;
