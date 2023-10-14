import { IAlbum } from "interfaces/album";
import { IAlbumsList } from "interfaces/albumsList";
import styles from "./AlbumsList.module.scss";
import ListedElement from "@components/shared/ListedElement";
import { EListedElementTypes } from "@constants/enums";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";

const AlbumsList = ({ albums }: IAlbumsList) => {
  const {
    setTracks,
    setShowTracks,
    setAlbumArtist,
    setAlbumName,
    setAlbumUrl,
    setHideAlbums,
    setAlbumImage,
  } = useSelectedAlbumStore();

  return (
    <div className={styles.albumsList}>
      <h2>Albums</h2>
      <ul>
        {albums.map((album: IAlbum) => {
          const handleAlbumOnClick = () => {
            setTracks(album.tracks);
            setShowTracks(true);
            setAlbumArtist(album.artist.name);
            setAlbumName(album.name);
            setAlbumUrl(album.url);
            setHideAlbums(true);
            setAlbumImage(album.imageUrl);
          };

          return (
            <ListedElement
              key={`${album.name}`}
              onClick={() => handleAlbumOnClick()}
              image={album.imageUrl}
              name={album.name}
              type={EListedElementTypes.ALBUM}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default AlbumsList;
