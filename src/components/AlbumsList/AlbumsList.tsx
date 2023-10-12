/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAlbum } from "interfaces/album";
import Album from "./components/Album";
import { IAlbumsList } from "interfaces/albumsList";
import styles from "./AlbumsList.module.scss";
import { getSanitizedAlbums } from "@utils/helpers/getSanitizedAlbums";

const AlbumsList = ({ returnedArtistData }: IAlbumsList) => {
  const albums = getSanitizedAlbums(returnedArtistData);

  console.log("albums", albums);

  return (
    <div className={styles.albumsList}>
      <ul>
        {albums.map((album: IAlbum) => (
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
