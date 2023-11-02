import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import { IPlaylistSrc } from "interfaces/playlistSrc";

const useTrackPlayer = () => {
  const {
    setShowPlayer,
    setTrackIndex,
    setIsAlbum,
    albumStreamUrls,
    setPlaylist,
  } = useSelectedAlbumStore();
  const { setStreamUrl } = useSelectedTrackStore();

  const getPlaylist = () => {
    const playlist: IPlaylistSrc[] = [];

    for (let i = 0; i < albumStreamUrls.length; i++) {
      playlist.push({ src: albumStreamUrls[i] });
    }

    return playlist;
  };

  const handleOnPlayClickAlbum = (index: number) => {
    setPlaylist(getPlaylist());
    setTrackIndex(index);
    setShowPlayer(true);
    setIsAlbum(true);
  };

  const handleOnPlayClickTrack = (streamUrl: string) => {
    setStreamUrl(streamUrl);
    setShowPlayer(true);
  };

  return { handleOnPlayClickAlbum, handleOnPlayClickTrack };
};

export default useTrackPlayer;
