import { IAlbum } from "interfaces/album";
import { IAlbumsList } from "interfaces/albumsList";
import styles from "./AlbumsList.module.scss";
import { EListType } from "@constants/enums";
import List from "./components/List";
import { addAlbumId } from "@utils/helpers/addAlbumId";

const AlbumsList = ({ albums }: IAlbumsList) => {
  const songs = albums.filter((album: IAlbum) => album.tracks.length === 1);
  const sanitizedSongs = songs.filter((obj, index) => {
    return index === songs.findLastIndex((o) => obj.name === o.name);
  });
  const fullAlbums = albums.filter((album: IAlbum) => album.tracks.length > 1);

  const hasAlbums = fullAlbums.length > 0;
  const hasSongs = sanitizedSongs.length > 0;

  return (
    <div className={styles.albumsList}>
      {hasAlbums && (
        <List items={addAlbumId(fullAlbums)} type={EListType.ALBUMS} />
      )}
      {hasSongs && <List items={sanitizedSongs} type={EListType.SONGS} />}
    </div>
  );
};

export default AlbumsList;
