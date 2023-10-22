import styles from "./AlbumsList.module.scss";
import { EListType } from "@constants/enums";
import List from "./components/List";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import GoBackButton from "@components/shared/GoBackButton";
import { useLoaderStore } from "@store/useLoaderStore";
import { useEffect } from "react";
import Loader from "@components/shared/Loader";

const AlbumsList = () => {
  const { artistInfo } = useSelectedArtistStore();
  const { showLoader, setShowLoader } = useLoaderStore();
  const albums = artistInfo?.albums;
  const fullAlbums = albums?.filter((album) => album.url.includes("album"));
  const songs = albums?.filter((album) => album.url.includes("track"));
  const hasAlbums = fullAlbums && fullAlbums.length > 0;
  const hasSongs = songs && songs.length > 0;

  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.albumsList}>
        {!showLoader ? (
          <>
            <GoBackButton isAlbums />
            {hasAlbums && <List items={fullAlbums} type={EListType.ALBUMS} />}
            {hasSongs && <List items={songs} type={EListType.SONGS} />}
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
