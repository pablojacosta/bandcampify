import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { IAlbum } from "../../interfaces/album";
import styles from "./Album.module.scss";
import Separator from "@components/elements/Separator";

const Album = ({ name, image, tracks, id, artist, url }: IAlbum) => {
  const {
    setTracks,
    setShowTracks,
    setAlbumArtist,
    setAlbumId,
    setAlbumName,
    setAlbumUrl,
  } = useSelectedAlbumStore();

  const handleAlbumOnClick = () => {
    setTracks(tracks);
    setShowTracks(true);
    setAlbumArtist(artist);
    setAlbumId(id);
    setAlbumName(name);
    setAlbumUrl(url);
  };

  return (
    <div className={styles.album}>
      <div className={styles.albumData}>
        <picture className={styles.image}>
          <img src={image} />
        </picture>
        <a onClick={handleAlbumOnClick} className={styles.albumName}>
          {name}
        </a>
      </div>
      <Separator color="white" className={styles.separator} />
    </div>
  );
};

export default Album;
