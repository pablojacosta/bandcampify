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
  isFoundResults,
  isList,
  noSlider,
  handleAlbumOnClick,
  handleSongOnClick,
}: IListedElement) => {
  const isTrack = type === EListedElementTypes.TRACK;
  const isArtist = type === EListedElementTypes.ARTIST;
  const iconStyle = {
    color: !isTrack ? "black" : "white",
    fontSize: "2rem",
    paddingLeft: "0.15rem",
  };
  const tag = !isTrack ? type : artist ? artist : album?.substring(3);

  return (
    <div
      className={`${styles.listedElement} ${
        isFoundResults ? styles.isFoundResults : ""
      } ${isList ? styles.isList : ""}`}
    >
      <li onClick={onClick}>
        <div className={`${styles.content} ${noSlider ? styles.noSlider : ""}`}>
          <picture>
            <img src={image} alt="Listed Element Image" />
          </picture>
          <div className={styles.text}>
            <div className={styles.top}>
              <p className={styles.name}>{name}</p>
              <p className={styles.tag}>{tag}</p>
            </div>
            {!isArtist && (
              <div
                className={styles.playButton}
                onClick={isTrack ? handleSongOnClick : handleAlbumOnClick}
              >
                <BiPlay style={iconStyle} />
              </div>
            )}
          </div>
        </div>
      </li>
    </div>
  );
};

export default ListedElement;
