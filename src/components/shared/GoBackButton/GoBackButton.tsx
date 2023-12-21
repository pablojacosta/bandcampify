import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import styles from "./GoBackButton.module.scss";
import { Link } from "react-router-dom";
import LeftArrow from "@components/elements/Icons/LeftArrow";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { IGoBackButton } from "interfaces/goBackButton";
import { ALBUMS, HOME } from "@constants/routes";

const GoBackButton = ({ isAlbums = false }: IGoBackButton) => {
  const { setHideAlbums, setHasAlbums, setShowTrackList } =
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
    setIsTrack(false);
    setTrack(null);
  };

  console.log("fetchArtist", fetchArtist);
  console.log("isAlbums", isAlbums);

  return (
    <div className={styles.goBackButton}>
      <button onClick={handleGoBackClick}>
        <Link to={href}>
          <LeftArrow />
        </Link>
      </button>
    </div>
  );
};

export default GoBackButton;
