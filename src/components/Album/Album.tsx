import { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import TrackList from "../TrackList";
import { IAlbum } from "../../interfaces/album";

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
    <div>
      <div>
        <div>
          <img src={image} />
        </div>
        <a onClick={() => handlePlayClick(artist, id, name, url)}>{name}</a>
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
