import useGetArtistAlbums from "@hooks/useGetArtistAlbums";
import styles from "./FoundResults.module.scss";
import { IFoundResults } from "interfaces/foundResult";
import ListedElement from "@components/shared/ListedElement";
import { EListedElementTypes } from "@constants/enums";

const FoundResults = ({ foundResults }: IFoundResults) => {
  const { getAlbums } = useGetArtistAlbums();
  const isError = typeof foundResults === "string";

  console.log("foundResults", foundResults);

  return (
    <div className={styles.foundResults}>
      <h1>Artists</h1>
      {!isError ? (
        <ul>
          {foundResults.map((artist) => (
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
        <h2>{foundResults}</h2>
      )}
    </div>
  );
};

export default FoundResults;
