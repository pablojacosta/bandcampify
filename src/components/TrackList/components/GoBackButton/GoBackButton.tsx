import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import styles from "./GoBackButton.module.scss";
import { Link } from "react-router-dom";
import LeftArrow from "@components/elements/Icons/LeftArrow";

const GoBackButton = () => {
  const { setShowPlayer, setHideAlbums, setHasAlbums, setShowTrackList } =
    useSelectedAlbumStore();

  const handleGoBackClick = () => {
    setHasAlbums(true);
    setHideAlbums(false);
    setShowTrackList(false);
    setShowPlayer(false);
  };

  return (
    <div className={styles.goBackButton}>
      <Link to="/">
        <button onClick={handleGoBackClick}>
          <LeftArrow />
        </button>
      </Link>
    </div>
  );
};

export default GoBackButton;
