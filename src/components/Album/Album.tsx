import { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import TrackList from "../TrackList";
import { IAlbum } from "../../interfaces/album";
import styles from "./Album.module.scss";

const Album = ({
  name,
  url,
  image,
  id,
  artist,
  tracks,
  handlePlayClick,
  handleTrackPlayClick,
  handleAlbumPlusClick,
  handleAlbumMinusClick,
  showTracks,
  albumNameToShowTracks,
}: IAlbum) => {
  const [plusSize, setPlusSize] = useState("1.0em");

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
        {showTracks && albumNameToShowTracks === name ? (
          <FaMinusCircle
            color="white"
            onMouseEnter={() => {
              setPlusSize("1.1em");
            }}
            onMouseLeave={() => {
              setPlusSize("1.0em");
            }}
            size={plusSize}
            onClick={() => {
              handleAlbumMinusClick(name);
            }}
          />
        ) : (
          <FaPlusCircle
            color="white"
            onMouseEnter={() => {
              setPlusSize("1.1em");
            }}
            onMouseLeave={() => {
              setPlusSize("1.0em");
            }}
            size={plusSize}
            onClick={() => {
              handleAlbumPlusClick(name);
            }}
          />
        )}
      </div>
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
