import { formatDuration } from "@utils/helpers/formatDuration";
import styles from "./ListedTracks.module.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import Track from "../Track";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import useTrackPlayer from "@hooks/useTrackPlayer";
import { useEffect } from "react";
import { useAutoPlayStore } from "@store/useAutoPlayStore";

const ListedTracks = () => {
  const { album } = useSelectedAlbumStore();
  const { isTrack, track } = useSelectedTrackStore();
  const { handleOnPlayClickAlbum, handleOnPlayClickTrack } = useTrackPlayer();
  const { isAutoPlay, setIsAutoPlay } = useAutoPlayStore();

  useEffect(() => {
    if (!isAutoPlay) {
      return;
    }

    if (album) {
      handleOnPlayClickAlbum(0);
      setIsAutoPlay(false);
    }

    if (track) {
      handleOnPlayClickTrack(track.streamUrl);
      setIsAutoPlay(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.listedTracks}>
      {!isTrack && album && album.tracks ? (
        <ul>
          {album.tracks.map((track, index) => (
            <li
              key={`${album.raw.basic.albumRelease[0].additionalProperty[0].value}_${track.name}`}
            >
              <Track
                handleOnPlayClick={() => handleOnPlayClickAlbum(index)}
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
            <ul>
              <li>
                <Track
                  handleOnPlayClick={() =>
                    handleOnPlayClickTrack(track.streamUrl)
                  }
                  name={track.name}
                  index={0}
                  duration={""}
                />
              </li>
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default ListedTracks;
