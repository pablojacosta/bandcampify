import { formatDuration } from "@utils/helpers/formatDuration";
import styles from "./ListedTracks.module.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { getTrackId } from "@utils/helpers/getTrackId";
import Track from "../Track";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import { IAlbum } from "interfaces/album";

const ListedTracks = () => {
  const { setShowPlayer, setTrackId, album, setAlbumId } =
    useSelectedAlbumStore();
  const { isTrack } = useSelectedTrackStore();
  const { track } = useSelectedTrackStore();

  const handleOnPlayClickAlbum = (trackId: string, album: IAlbum) => {
    setTrackId(trackId);
    setShowPlayer(true);
    setAlbumId(album.raw.basic.albumRelease[0].additionalProperty[0].value);
  };

  const handleOnPlayClickTrack = (trackId: string) => {
    setTrackId(trackId);
    setShowPlayer(true);
    setAlbumId(0);
  };

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
                  handleOnPlayClickAlbum(getTrackId(track.streamUrl), album)
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
                    handleOnPlayClickTrack(getTrackId(track.streamUrl))
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
