import styles from "./AlbumsList.module.scss";
import { EListType } from "@constants/enums";
import List from "./components/List";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";

const AlbumsList = () => {
  const { artistInfo } = useSelectedArtistStore();
  console.log("artistInfo", artistInfo);
  const albums = artistInfo?.albums;
  const fullAlbums = albums?.filter((album) => album.url.includes("album"));
  const songs = albums?.filter((album) => album.url.includes("track"));
  // const songs = albums.filter((album: IAlbum) => album.tracks.length === 1);
  // const sanitizedSongs = songs.filter((obj, index) => {
  //   return index === songs.findLastIndex((o) => obj.name === o.name);
  // });
  // const fullAlbums = albums.filter((album: IAlbum) => album.tracks.length > 1);

  const hasAlbums = fullAlbums && fullAlbums.length > 0;
  const hasSongs = songs && songs.length > 0;

  return (
    <div className={styles.albumsList}>
      {hasAlbums && <List items={fullAlbums} type={EListType.ALBUMS} />}
      {hasSongs && <List items={songs} type={EListType.SONGS} />}
    </div>
  );
};

export default AlbumsList;
