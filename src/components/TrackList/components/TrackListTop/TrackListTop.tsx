import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import styles from "./TrackListTop.module.scss";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { useEffect, useState } from "react";
import { useLoaderStore } from "@store/useLoaderStore";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import useGetArtistData from "@hooks/useGetArtistData";
import AlbumData from "./components/AlbumData";

const TrackListTop = () => {
  const { setShowLoader } = useLoaderStore();
  const { album, isAlbum } = useSelectedAlbumStore();
  const [itemImage, setItemImage] = useState("");
  const [itemName, setItemName] = useState("");
  const { isTrack } = useSelectedTrackStore();
  const { track } = useSelectedTrackStore();
  const { fetchArtist } = useSelectedArtistStore();
  const { getArtistData } = useGetArtistData();

  useEffect(() => {
    if (!fetchArtist) {
      return;
    }

    if (isAlbum && album) {
      getArtistData(album.artist.url);
    }

    if (isTrack && track) {
      getArtistData(track.artist.url);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (album) {
      const { imageUrl, name } = album;

      setItemImage(imageUrl);
      setItemName(name);
    }
  }, [album, setShowLoader, fetchArtist]);

  useEffect(() => {
    if (track) {
      const { imageUrl, name } = track;

      setItemImage(imageUrl);
      setItemName(name);
    }
  }, [track]);

  return (
    <div className={styles.trackListTop}>
      {(isTrack || album) && (
        <>
          <picture className={styles.albumImage}>
            <img src={itemImage} alt="Album Image" />
          </picture>
          <div className={styles.topText}>
            <p className={styles.type}>{!isTrack ? "Album" : "Song"}</p>
            <h2>{itemName}</h2>
            <AlbumData />
          </div>
        </>
      )}
    </div>
  );
};

export default TrackListTop;
