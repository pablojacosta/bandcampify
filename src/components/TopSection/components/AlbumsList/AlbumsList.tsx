import styles from "./AlbumsList.module.scss";
import { EListType } from "@constants/enums";
import List from "./components/List";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";

const AlbumsList = () => {
  const { artistInfo } = useSelectedArtistStore();
  const albums = artistInfo?.albums;
  const fullAlbums = albums?.filter((album) => album.url.includes("album"));
  const songs = albums?.filter((album) => album.url.includes("track"));
  const hasAlbums = fullAlbums && fullAlbums.length > 0;
  const hasSongs = songs && songs.length > 0;

  console.log("songs", songs);

  return (
    <div className={styles.albumsList}>
      {hasAlbums && <List items={fullAlbums} type={EListType.ALBUMS} />}
      {hasSongs && <List items={songs} type={EListType.SONGS} />}
    </div>
  );
};

export default AlbumsList;
