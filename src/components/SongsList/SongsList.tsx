import { ISongsList } from "interfaces/songsList";
import styles from "./SongsList.module.scss";
import { getSanitizedAlbums } from "@utils/helpers/getSanitizedAlbums";
import { IFilteredTrack } from "interfaces/filteredTrack";
import { EListedElementTypes, ETrackPlayerType } from "@constants/enums";
import ListedElement from "@components/shared/ListedElement";
import { useEffect } from "react";
import { useSongsStore } from "@store/useSongsStore";
import TrackPlayer from "@components/shared/TrackPlayer";

const SongsList = ({ returnedArtistData }: ISongsList) => {
  const { filteredUniqueTracks: songs } =
    getSanitizedAlbums(returnedArtistData);
  const { setHasSongs, setShowPlayer, setSongId, showPlayer } = useSongsStore();
  const hasSongs = songs.length > 0;

  useEffect(() => {
    if (!hasSongs) {
      return;
    }

    setHasSongs(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSongs]);

  return (
    <div className={styles.songsList}>
      {hasSongs && (
        <>
          <h2>Songs</h2>

          {showPlayer && (
            <div className={styles.player}>
              <TrackPlayer type={ETrackPlayerType.SONG} />
            </div>
          )}
          <ul>
            {songs.map((song: IFilteredTrack) => {
              const handleSongOnClick = () => {
                setShowPlayer(true);
                setSongId(song.id);
              };

              return (
                <ListedElement
                  key={`${song.id}`}
                  onClick={handleSongOnClick}
                  image={song.image}
                  name={song.name}
                  type={EListedElementTypes.TRACK}
                  artist={song.artist}
                />
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default SongsList;
