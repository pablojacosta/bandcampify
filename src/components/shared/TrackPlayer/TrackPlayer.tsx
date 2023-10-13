/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import styles from "./TrackPlayer.module.scss";
import { ITrackPlayer } from "interfaces/trackPlayer";
import { ETrackPlayerType } from "@constants/enums";
import { useSongsStore } from "@store/useSongsStore";

const TrackPlayer = ({ type }: ITrackPlayer) => {
  const { albumId, trackId } = useSelectedAlbumStore();
  const { songId } = useSongsStore();
  const src =
    type === ETrackPlayerType.ALBUM
      ? `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=medium/bgcol=333333/linkcol=1ed760/artwork=false/track=${trackId}/transparent=true/`
      : `https://bandcamp.com/EmbeddedPlayer/track=${songId}/size=medium/bgcol=333333/linkcol=1ed760/artwork=false//transparent=true/`;

  console.log("src", src);
  return (
    <div className={styles.trackPlayer}>
      <iframe
        style={{ border: 0, width: 500, height: 150 }}
        src={src}
        seamless
      ></iframe>
    </div>
  );
};

export default TrackPlayer;
