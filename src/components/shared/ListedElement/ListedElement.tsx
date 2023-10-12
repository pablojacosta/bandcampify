import { IListedElement } from "interfaces/listedElement";
import styles from "./ListedElement.module.scss";
import { BiPlay } from "react-icons/bi";

const ListedElement = ({ key, onClick, name, image, type }: IListedElement) => {
  const iconStyle = {
    color: "black",
    fontSize: "2rem",
    paddingLeft: "0.15rem",
  };

  return (
    <div className={styles.listedElement}>
      <li key={key} onClick={onClick}>
        <div className={styles.content}>
          <picture>
            <img src={image} alt="Listed Element Image" />
          </picture>
          <p className={styles.artistName}>{name}</p>
          <p className={styles.artistTag}>{type}</p>
          <div className={styles.playButton}>
            <BiPlay style={iconStyle} />
          </div>
        </div>
      </li>
    </div>
  );
};

export default ListedElement;
