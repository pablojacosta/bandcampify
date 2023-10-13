import { IListedElement } from "interfaces/listedElement";
import styles from "./ListedElement.module.scss";
import { BiPlay } from "react-icons/bi";
import { EListedElementTypes } from "@constants/enums";

const ListedElement = ({
  key,
  onClick,
  name,
  image,
  type,
  artist,
}: IListedElement) => {
  const isSong = type === EListedElementTypes.TRACK;
  const iconStyle = {
    color: !isSong ? "black" : "white",
    fontSize: "2rem",
    paddingLeft: "0.15rem",
  };
  const tag = !isSong ? type : artist;

  return (
    <div className={`${styles.listedElement} ${isSong ? styles.isSong : ""}`}>
      <li key={key} onClick={onClick}>
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