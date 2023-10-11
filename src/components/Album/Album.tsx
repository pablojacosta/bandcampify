import TrackList from "../TrackList";
import { IAlbum } from "../../interfaces/album";
import styles from "./Album.module.scss";
import Separator from "@components/elements/Separator";

const Album = ({
  name,
  url,
  image,
  id,
  artist,
  tracks,
  handlePlayClick,
  handleTrackPlayClick,
  showTracks,
  albumNameToShowTracks,
}: IAlbum) => {
  return (
    <div className={styles.album}>
      <div className={styles.albumData}>
        <picture className={styles.image}>
          <img src={image} />
        </picture>
        <a
          onClick={() => handlePlayClick(artist, id, name, url)}
          className={styles.albumName}
        >
          {name}
        </a>
      </div>
      <Separator color="white" className={styles.separator} />
      {showTracks && albumNameToShowTracks === name && (
        <TrackList
          tracks={tracks}
          handleTrackPlayClick={handleTrackPlayClick}
          artist={artist}
          albumId={id}
          albumName={name}
          albumUrl={url}
        />
      )}
    </div>
  );
};

export default Album;
