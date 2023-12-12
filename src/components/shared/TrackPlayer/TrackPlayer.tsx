import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import styles from "./TrackPlayer.module.scss";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { useAutoPlayStore } from "@store/useAutoPlayStore";
import { useEffect, useRef, useState } from "react";

const TrackPlayer = () => {
  const { streamUrl, track } = useSelectedTrackStore();
  const { trackIndex, isAlbum, playList, setTrackIndex, album } =
    useSelectedAlbumStore();
  const { setIsPlaying, pauseTrack, playedArtistName, playedTrackName } =
    useAutoPlayStore();
  const src = isAlbum ? playList[trackIndex].src : streamUrl;
  const player = useRef<AudioPlayer | null>(null);
  const albumIsPlaying = isAlbum && album;
  const trackIsPlaying = !isAlbum && track;
  const [artistName, setArtistName] = useState("");
  const [trackName, setTrackName] = useState("");

  const handleClickPrevious = () => {
    setTrackIndex(trackIndex > 0 ? trackIndex - 1 : 0);
  };

  const handleClickNext = () => {
    if (trackIndex === playList.length - 1) {
      return;
    }

    setTrackIndex(trackIndex + 1);
  };

  useEffect(() => {
    if (!pauseTrack) {
      player.current?.audio.current?.play();
      return;
    }

    player.current?.audio.current?.pause();
  }, [pauseTrack]);

  useEffect(() => {
    if (!albumIsPlaying && !trackIsPlaying) {
      return;
    }

    if (albumIsPlaying) {
      setArtistName(album.artist.name);
      setTrackName(album.tracks[trackIndex].name);
    }

    if (trackIsPlaying) {
      setArtistName(track.artist.name);
      setTrackName(track.name);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  console.log("------------------");
  console.log("src", src);
  console.log("albumIsPlaying", albumIsPlaying);
  console.log("trackIsPlaying", trackIsPlaying);
  console.log("artistName", artistName);
  console.log("trackName", trackName);
  console.log("track", track);
  console.log("------------------");

  return (
    <div className={styles.trackPlayer}>
      <div className={styles.details}>
        {playedArtistName} - {playedTrackName}
      </div>
      <AudioPlayer
        autoPlay
        src={src}
        className={styles.player}
        showSkipControls
        onEnded={handleClickNext}
        autoPlayAfterSrcChange={true}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        showJumpControls={false}
        onPlay={() =>
          setIsPlaying(true, trackIndex, src, artistName, trackName)
        }
        onPause={() =>
          setIsPlaying(false, trackIndex, src, artistName, trackName)
        }
        ref={player}
      />
      <div className={styles.footerSpace} />
    </div>
  );
};

export default TrackPlayer;
