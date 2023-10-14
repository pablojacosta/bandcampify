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

  console.log("albums", albums);

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

          const isOneTrack = album.tracks.length === 1;

          return (
            <ListedElement
              key={`${album.name}`}
              onClick={() => handleAlbumOnClick()}
              image={album.imageUrl}
              name={album.name}
              artist={album.artist.name}
              type={
                !isOneTrack
                  ? EListedElementTypes.ALBUM
                  : EListedElementTypes.TRACK
              }
            />
          );
        })}
      </ul>
    </div>
  );
};

export default AlbumsList;
