import useGetArtistAlbums from "@hooks/useGetArtistAlbums";
import styles from "./FoundArtists.module.scss";
import { IFoundArtists } from "interfaces/foundArtist";
import Separator from "@components/elements/Separator";

const FoundArtists = ({ foundArtists }: IFoundArtists) => {
  const { getAlbums } = useGetArtistAlbums();

  return (
    <div className={styles.foundArtists}>
      <ul>
        {foundArtists.map((artist) => (
          <>
            <li
              key={`${artist.name}_${artist.genre}`}
              onClick={() => getAlbums(artist.url)}
            >
              {artist.name}
            </li>
            <Separator color="white" />
          </>
        ))}
      </ul>
    </div>
  );
};

export default FoundArtists;
