import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import styles from "./GoBackButton.module.scss";
import { Link } from "react-router-dom";
import LeftArrow from "@components/elements/Icons/LeftArrow";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { IGoBackButton } from "interfaces/goBackButton";

const GoBackButton = ({ isAlbums = false }: IGoBackButton) => {
  const { setShowPlayer, setHideAlbums, setHasAlbums, setShowTrackList } =
    useSelectedAlbumStore();
  const { setIsTrack, setTrack } = useSelectedTrackStore();
  const { fetchArtist } = useSelectedArtistStore();

  const handleGoBackClick = () => {
    if (!fetchArtist) {
      setHasAlbums(true);
      setHideAlbums(false);
    }

    if (isAlbums) {
      setHideAlbums(true);
      setHasAlbums(false);
    }
    setShowTrackList(false);
    setShowPlayer(false);
    setIsTrack(false);
    setTrack(null);
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
