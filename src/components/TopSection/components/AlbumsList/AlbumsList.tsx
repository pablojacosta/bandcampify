import styles from "./AlbumsList.module.scss";
import { EListType } from "@constants/enums";
import List from "./components/List";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import GoBackButton from "@components/shared/GoBackButton";
import { useLoaderStore } from "@store/useLoaderStore";
import Loader from "@components/shared/Loader";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";

const AlbumsList = () => {
  const { artistInfo } = useSelectedArtistStore();
  const { showLoader } = useLoaderStore();
  const { showPlayer } = useSelectedAlbumStore();
  const albums = artistInfo?.albums;
  const fullAlbums = albums?.filter((album) => album.url.includes("album"));
  const songs = albums?.filter((album) => album.url.includes("track"));
  const hasAlbums = fullAlbums && fullAlbums.length > 0;
  const hasSongs = songs && songs.length > 0;

  return (
    <>
      <div
        className={`${styles.albumsList} ${
          showPlayer ? styles.showPlayer : ""
        }`}
      >
        {!showLoader ? (
          <>
            <GoBackButton isAlbums />
            {hasAlbums && <List items={fullAlbums} type={EListType.ALBUMS} />}
            {hasSongs && <List items={songs} type={EListType.SONGS} />}
            {showPlayer && <div className={styles.playerSpace} />}
          </>
        ) : (
          <div className={styles.loader}>
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};

export default AlbumsList;
