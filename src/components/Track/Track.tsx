import { ITrack } from "../../interfaces/track";

const Track = ({
  handleTrackPlayClick,
  name,
  id,
  artist,
  albumId,
  albumName,
  albumUrl,
  index,
}: ITrack) => {
  return (
    <div>
      <p>{index + 1} </p>
      <a
        onClick={() =>
          handleTrackPlayClick(artist, albumId, albumName, albumUrl, id)
        }
      >
        {name}
      </a>
    </div>
  );
};

export default Track;
