import useGetArtistAlbums from "@hooks/useGetArtistAlbums";
import styles from "./FoundResults.module.scss";
import { IFoundResults } from "interfaces/foundResult";
import ListedElement from "@components/shared/ListedElement";
import { EListedElementTypes, ESearchResultTypes } from "@constants/enums";

const FoundResults = ({ foundResults }: IFoundResults) => {
  const { getAlbums } = useGetArtistAlbums();
  const isError = typeof foundResults === "string";
  const artists = foundResults.filter(
    (result) => result.type === ESearchResultTypes.ARTIST
  );
  const albums = foundResults.filter(
    (result) => result.type === ESearchResultTypes.ALBUM
  );
  const tracks = foundResults.filter(
    (result) => result.type === ESearchResultTypes.TRACK
  );
  const hasArtists = artists.length > 0;
  const hasAlbums = albums.length > 0;
  const hasTracks = tracks.length > 0;

  console.log("foundResults", foundResults);

  return (
    <div className={styles.foundResults}>
      {!isError ? (
        <>
          {hasArtists && (
            <>
              <h1>Artists</h1>
              <ul>
                {foundResults
                  .filter((result) => result.type === ESearchResultTypes.ARTIST)
                  .map((artist) => (
                    <ListedElement
                      key={`${artist.name}_${artist.genre}`}
                      onClick={() => getAlbums(artist.url, artist.imageUrl)}
                      image={artist.imageUrl}
                      name={artist.name}
                      type={EListedElementTypes.ARTIST}
                    />
                  ))}
              </ul>
            </>
          )}
          {hasAlbums && (
            <>
              <h1>Albums</h1>
              <ul>
                {foundResults
                  .filter((result) => result.type === ESearchResultTypes.ALBUM)
                  .map((album) => (
                    <ListedElement
                      key={album.url}
                      onClick={() => getAlbums(album.url, album.imageUrl)}
                      image={album.imageUrl}
                      name={album.name}
                      type={EListedElementTypes.ALBUM}
                    />
                  ))}
              </ul>
            </>
          )}
          {hasTracks && (
            <>
              <h1>Songs</h1>
              <ul>
                {foundResults
                  .filter((result) => result.type === ESearchResultTypes.TRACK)
                  .map((song) => (
                    <ListedElement
                      key={song.url}
                      onClick={() => getAlbums(song.url, song.imageUrl)}
                      image={song.imageUrl}
                      name={song.name}
                      type={EListedElementTypes.ALBUM}
                    />
                  ))}
              </ul>
            </>
          )}
        </>
      ) : (
        <h2>Sorry. No results found. Please, try again.</h2>
      )}
    </div>
  );
};

export default FoundResults;
