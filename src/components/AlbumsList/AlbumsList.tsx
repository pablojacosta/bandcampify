import Album from "../Album";
import { IAlbumsList } from "../../interfaces/albumsList";
import { IAlbum } from "../../interfaces/album";

const AlbumsList = ({
  returnedArtistData,
  handlePlayClick,
  handleTrackPlayClick,
  handleAlbumPlusClick,
  handleAlbumMinusClick,
  showTracks,
  albumNameToShowTracks,
}: IAlbumsList) => {
  return (
    <ul>
      {returnedArtistData.map((album: IAlbum) => (
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
            handleAlbumPlusClick={handleAlbumPlusClick}
            handleAlbumMinusClick={handleAlbumMinusClick}
            showTracks={showTracks}
            albumNameToShowTracks={albumNameToShowTracks}
          />
        </li>
      ))}
    </ul>
  );
};

export default AlbumsList;
