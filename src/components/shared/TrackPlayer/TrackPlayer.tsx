import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import styles from "./TrackPlayer.module.scss";
import useMediaQuery from "@hooks/useMediaQuery";

const TrackPlayer = () => {
  const { trackId } = useSelectedAlbumStore();
  const isMobileBreakpoint = useMediaQuery(563);
  const isSmallBreakpoint = useMediaQuery(416);
  const isExtraSmallBreakpoint = useMediaQuery(330);
  const src = `https://bandcamp.com/EmbeddedPlayer/track=${trackId}/size=medium/bgcol=333333/linkcol=1ed760/artwork=false/transparent=true/`;

  const style =
    !isMobileBreakpoint && !isSmallBreakpoint && !isExtraSmallBreakpoint
      ? { border: 0, width: 500, height: 150 }
      : isMobileBreakpoint && !isSmallBreakpoint && !isExtraSmallBreakpoint
      ? { border: 0, width: 400, height: 150 }
      : isMobileBreakpoint && isSmallBreakpoint && !isExtraSmallBreakpoint
      ? { border: 0, width: 300, height: 150 }
      : { border: 0, width: 250, height: 150 };

  return (
    <div className={styles.trackPlayer}>
      <iframe style={style} src={src} seamless />
      <div className={styles.footerSpace} />
    </div>
  );
};

export default TrackPlayer;
