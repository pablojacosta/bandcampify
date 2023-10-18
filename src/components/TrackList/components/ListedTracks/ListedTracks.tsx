import { formatDuration } from "@utils/helpers/formatDuration";
import styles from "./ListedTracks.module.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { getTrackId } from "@utils/helpers/getTrackId";
import Track from "../Track";
import { useEffect, useState } from "react";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";

const ListedTracks = () => {
  const { setShowPlayer, setTrackId, album } = useSelectedAlbumStore();
  const [albumId, setAlbumId] = useState<number | null>(null);
  const handleOnPlayClick = (trackId: string) => {
    setTrackId(trackId);
    setShowPlayer(true);
  };
  const { isTrack } = useSelectedTrackStore();
  const { track } = useSelectedTrackStore();

  useEffect(() => {
    if (!album) {
      return;
    }
    setAlbumId(album.raw.basic.albumRelease[0].additionalProperty[0].value);
  }, [album]);

  return (
    <div className={styles.listedTracks}>
      {!isTrack && album && album.tracks ? (
        <ul>
          {album.tracks.map((track, index) => (
            <li key={`${albumId}_${track.name}`}>
              <Track
                handleOnPlayClick={() =>
                  handleOnPlayClick(getTrackId(track.streamUrl))
                }
                name={track.name}
                index={index}
                duration={formatDuration(track.duration)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <>
          {track && (
            <Track
              handleOnPlayClick={() =>
                handleOnPlayClick(getTrackId(track.streamUrl))
              }
              name={track.name}
              index={0}
              duration={"66666"}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ListedTracks;
