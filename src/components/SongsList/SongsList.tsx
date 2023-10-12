import { ISongsList } from "interfaces/songsList";
import styles from "./SongsList.module.scss";
import { getSanitizedAlbums } from "@utils/helpers/getSanitizedAlbums";
import { IFilteredTrack } from "interfaces/filteredTrack";
import { EListedElementTypes } from "@constants/enums";
import ListedElement from "@components/shared/ListedElement";

const SongsList = ({ returnedArtistData }: ISongsList) => {
  const { filteredUniqueTracks: songs } =
    getSanitizedAlbums(returnedArtistData);

  console.log("returnedArtistData", returnedArtistData);
  console.log("songs", songs);

  return (
    <div className={styles.songsList}>
      <h2>Songs</h2>
      <ul>
        {songs.map((song: IFilteredTrack) => {
          const handleSongOnClick = () => {
            // setAlbumArtist(album.artist);
            // setAlbumId(album.id.toString());
            // setAlbumName(album.name);
            // setAlbumUrl(album.url);
            // setHideAlbums(true);
            // setAlbumImage(album.image);
          };

          return (
            <ListedElement
              key={`${song.id}`}
              onClick={handleSongOnClick}
              image={song.image}
              name={song.name}
              type={EListedElementTypes.TRACK}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SongsList;
