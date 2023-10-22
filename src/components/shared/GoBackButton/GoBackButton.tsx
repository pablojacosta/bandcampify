import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import styles from "./GoBackButton.module.scss";
import { Link } from "react-router-dom";
import LeftArrow from "@components/elements/Icons/LeftArrow";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { IGoBackButton } from "interfaces/goBackButton";
import { ALBUMS, HOME } from "@constants/routes";

const GoBackButton = ({ isAlbums = false }: IGoBackButton) => {
  const { setShowPlayer, setHideAlbums, setHasAlbums, setShowTrackList } =
    useSelectedAlbumStore();
  const { setIsTrack, setTrack } = useSelectedTrackStore();
  const { fetchArtist, setHideArtists } = useSelectedArtistStore();
  const href = !fetchArtist && !isAlbums ? ALBUMS : HOME;

  const handleGoBackClick = () => {
    if (!fetchArtist) {
      setHasAlbums(true);
      setHideAlbums(false);
    }

    if (isAlbums) {
      setHideAlbums(true);
      setHasAlbums(false);
      setHideArtists(false);
    }

    setShowTrackList(false);
    setShowPlayer(false);
    setIsTrack(false);
    setTrack(null);
  };

  return (
    <div className={styles.goBackButton}>
      <Link to={href}>
        <button onClick={handleGoBackClick}>
          <LeftArrow />
        </button>
      </Link>
    </div>
  );
};

export default GoBackButton;
