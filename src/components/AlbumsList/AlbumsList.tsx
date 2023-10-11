import { IAlbum } from "interfaces/album";
import Album from "../Album";
import { IAlbumsList } from "interfaces/albumsList";
import styles from "./AlbumsList.module.scss";

const AlbumsList = ({ returnedArtistData }: IAlbumsList) => {
  return (
    <div className={styles.albumsList}>
      <ul>
        {returnedArtistData
          .filter((album: IAlbum) => album.tracks.length !== 0)
          .map((album: IAlbum) => (
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
