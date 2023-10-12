/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import styles from "./TrackPlayer.module.scss";

const TrackPlayer = () => {
  const { albumName, albumId, albumUrl, albumArtist, trackId } =
    useSelectedAlbumStore();

  // const player: any = document.querySelector("#player");

  // let iWindow;

  // if (player) {
  //   iWindow = player.contentWindow;
  // }

  // const iDocument = iWindow.document;
  // iDocument.getElementById("big_play_button").click();
  console.log("albumId", albumId);
  console.log("trackId", trackId);

  return (
    <div className={styles.trackPlayer}>
      <iframe
        style={{ border: 0, width: 500, height: 250 }}
        title={albumName}
        src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=medium/bgcol=333333/linkcol=e6682b/artwork=false/transparent=true/`}
        // src="https://bandcamp.com/EmbeddedPlayer/album=2008797922/size=small/bgcol=ffffff/linkcol=0687f5/track=3700000941/transparent=true/"
        seamless
      >
        <a href={albumUrl}>
          ${albumName} by ${albumArtist}
        </a>
      </iframe>
    </div>
  );
};

export default TrackPlayer;

{
  /* <iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2008797922/size=small/bgcol=ffffff/linkcol=0687f5/track=3700000941/transparent=true/" seamless><a href="https://losramones.bandcamp.com/album/oye-vamos">¡Oye Vamos! de Los Ramones</a></iframe> */
}
