import { IAlbum } from "interfaces/album";
import Album from "../Album";
import { IAlbumsList } from "interfaces/albumsList";
import styles from "./AlbumsList.module.scss";

const AlbumsList = ({
  returnedArtistData,
  handlePlayClick,
  handleTrackPlayClick,
  showTracks,
  albumNameToShowTracks,
}: IAlbumsList) => {
  return (
    <div className={styles.albumsList}>
      <ul>
        {returnedArtistData
          .filter((album: IAlbum) => album.tracks.length !== 0)
          .map((album: IAlbum) => (
            <li>
              <Album
                key={album.id}
                name={album.name}
                url={album.url}
                image={album.image}
                id={album.id}
                artist={album.artist}
                tracks={album.tracks}
                handlePlayClick={handlePlayClick}
                handleTrackPlayClick={handleTrackPlayClick}
                showTracks={showTracks}
                albumNameToShowTracks={albumNameToShowTracks}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AlbumsList;
