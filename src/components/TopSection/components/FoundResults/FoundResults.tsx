import useGetArtistAlbums from "@hooks/useGetArtistAlbums";
import styles from "./FoundResults.module.scss";
import { IFoundResults } from "interfaces/foundArtist";
import ListedElement from "@components/shared/ListedElement";
import { EListedElementTypes } from "@constants/enums";

const FoundResults = ({ foundArtists }: IFoundResults) => {
  const { getAlbums } = useGetArtistAlbums();
  const isError = typeof foundArtists === "string";

  return (
    <div className={styles.foundArtists}>
      <h1>Artists</h1>
      {!isError ? (
        <ul>
          {foundArtists.map((artist) => (
            <ListedElement
              key={`${artist.name}_${artist.genre}`}
              onClick={() => getAlbums(artist.url, artist.imageUrl)}
              image={artist.imageUrl}
              name={artist.name}
              type={EListedElementTypes.ARTIST}
            />
          ))}
        </ul>
      ) : (
        <h2>{foundArtists}</h2>
      )}
    </div>
  );
};

export default FoundResults;
