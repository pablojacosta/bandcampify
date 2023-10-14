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

  const songs = albums.filter((album: IAlbum) => album.tracks.length === 1);
  const sanitizedSongs = songs.filter((obj, index) => {
    return index === songs.findLastIndex((o) => obj.name === o.name);
  });

  const fullAlbums = albums.filter((album: IAlbum) => album.tracks.length > 1);

  return (
    <div className={styles.albumsList}>
      {fullAlbums && (
        <>
          <h2>Albums</h2>
          <ul>
            {fullAlbums.map((album: IAlbum) => {
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
                  artist={album.artist.name}
                  type={EListedElementTypes.ALBUM}
                />
              );
            })}
          </ul>
        </>
      )}
      {songs && (
        <>
          <h2>Songs</h2>
          <ul>
            {sanitizedSongs.map((song: IAlbum) => {
              const handleAlbumOnClick = () => {
                setTracks(song.tracks);
                setShowTracks(true);
                setAlbumArtist(song.artist.name);
                setAlbumName(song.name);
                setAlbumUrl(song.url);
                setHideAlbums(true);
                setAlbumImage(song.imageUrl);
              };

              return (
                <ListedElement
                  key={`${song.name}`}
                  onClick={() => handleAlbumOnClick()}
                  image={song.imageUrl}
                  name={song.name}
                  artist={song.artist.name}
                  type={EListedElementTypes.TRACK}
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
