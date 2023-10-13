/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAlbum } from "interfaces/album";
import { IAlbumsList } from "interfaces/albumsList";
import styles from "./AlbumsList.module.scss";
import { getSanitizedAlbums } from "@utils/helpers/getSanitizedAlbums";
import ListedElement from "@components/shared/ListedElement";
import { EListedElementTypes } from "@constants/enums";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";

const AlbumsList = ({ returnedArtistData }: IAlbumsList) => {
  const { filteredAlbums: albums } = getSanitizedAlbums(returnedArtistData);
  const {
    setTracks,
    setShowTracks,
    setAlbumArtist,
    setAlbumId,
    setAlbumName,
    setAlbumUrl,
    setHideAlbums,
    setAlbumImage,
  } = useSelectedAlbumStore();
  const hasAlbums = albums.length > 0;

  return (
    <div className={styles.albumsList}>
      {hasAlbums && (
        <>
          <h2>Albums</h2>
          <ul>
            {albums.map((album: IAlbum) => {
              const handleAlbumOnClick = () => {
                setTracks(album.tracks);
                setShowTracks(true);
                setAlbumArtist(album.artist);
                setAlbumId(album.id.toString());
                setAlbumName(album.name);
                setAlbumUrl(album.url);
                setHideAlbums(true);
                setAlbumImage(album.image);
              };

              return (
                <ListedElement
                  key={`${album.id}`}
                  onClick={handleAlbumOnClick}
                  image={album.image}
                  name={album.name}
                  type={EListedElementTypes.ALBUM}
                />
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default AlbumsList;
