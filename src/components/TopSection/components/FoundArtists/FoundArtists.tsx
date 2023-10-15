import useGetArtistAlbums from "@hooks/useGetArtistAlbums";
import styles from "./FoundArtists.module.scss";
import { IFoundArtists } from "interfaces/foundArtist";
import ListedElement from "@components/shared/ListedElement";
import { EListedElementTypes } from "@constants/enums";

const FoundArtists = ({ foundArtists }: IFoundArtists) => {
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
              onClick={() => getAlbums(artist.url)}
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

export default FoundArtists;
