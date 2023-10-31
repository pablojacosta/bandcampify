import { formatDuration } from "@utils/helpers/formatDuration";
import styles from "./ListedTracks.module.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import Track from "../Track";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import { IAlbumTrack } from "interfaces/albumTrack";
import { IAlbum } from "interfaces/album";
import { useEffect } from "react";

const ListedTracks = () => {
  const { setShowPlayer, album, setAlbumStreamUrls } = useSelectedAlbumStore();
  const { isTrack, track, setStreamUrl } = useSelectedTrackStore();

  const getTracksStreamUrls = (album: IAlbum) => {
    return album.tracks.map((track: IAlbumTrack) => track.streamUrl);
  };

  const handleOnPlayClickAlbum = (streamUrl: string) => {
    setShowPlayer(true);
    setStreamUrl(streamUrl);
  };

  const handleOnPlayClickTrack = (streamUrl: string) => {
    setStreamUrl(streamUrl);
    setShowPlayer(true);
  };

  useEffect(() => {
    if (album) {
      setAlbumStreamUrls(getTracksStreamUrls(album));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [album]);

  return (
    <div className={styles.listedTracks}>
      {!isTrack && album && album.tracks ? (
        <ul>
          {album.tracks.map((track, index) => (
            <li
              key={`${album.raw.basic.albumRelease[0].additionalProperty[0].value}_${track.name}`}
            >
              <Track
                handleOnPlayClick={() =>
                  handleOnPlayClickAlbum(track.streamUrl)
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
