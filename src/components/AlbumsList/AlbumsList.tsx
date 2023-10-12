/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAlbum } from "interfaces/album";
import Album from "./components/Album";
import { IAlbumsList } from "interfaces/albumsList";
import styles from "./AlbumsList.module.scss";
import { IFilteredTrack } from "interfaces/filteredTrack";

const AlbumsList = ({ returnedArtistData }: IAlbumsList) => {
  const filteredAlbums = returnedArtistData.filter(
    (album: IAlbum) => album.tracks.length !== 0
  );

  const filteredTracks = returnedArtistData
    .filter((album: IAlbum) => album.tracks.length === 0)
    .map((album: IAlbum) => ({ name: album.name, id: album.id }));

  const filteredUniqueTracks: IFilteredTrack[] = filteredTracks.filter(
    (obj: IFilteredTrack, index: number) => {
      return (
        index ===
        filteredTracks.findLastIndex((o: IFilteredTrack) => obj.id === o.id)
      );
    }
  );

  for (const track of filteredUniqueTracks) {
    for (let i = 0; i < filteredAlbums.length; i++) {
      for (let j = 0; j < filteredAlbums[i].tracks.length; j++) {
        if (filteredAlbums[i].tracks[j].name.localeCompare(track.name) === 0) {
          filteredAlbums[i].tracks[j].id = track.id;
        }
      }
    }
  }

  return (
    <div className={styles.albumsList}>
      <ul>
        {filteredAlbums.map((album: IAlbum) => (
          <li key={album.id}>
            <Album
              name={album.name}
              url={album.url}
              image={album.image}
              id={album.id}
              artist={album.artist}
              tracks={album.tracks}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumsList;
