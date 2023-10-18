import { formatDuration } from "@utils/helpers/formatDuration";
import styles from "./ListedTracks.module.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { getTrackId } from "@utils/helpers/getTrackId";
import Track from "../Track";
import { useEffect, useState } from "react";

const ListedTracks = () => {
  const { setShowPlayer, setTrackId, album } = useSelectedAlbumStore();
  const [albumId, setAlbumId] = useState<number | null>(null);
  const handleOnPlayClick = (trackId: string) => {
    setTrackId(trackId);
    setShowPlayer(true);
  };

  useEffect(() => {
    if (!album) {
      return;
    }
    setAlbumId(album.raw.basic.additionalProperty[0].value);
  }, [album]);

  return (
    <div className={styles.listedTracks}>
      {album && album.tracks && (
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
      )}
    </div>
  );
};

export default ListedTracks;
