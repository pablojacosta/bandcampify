import useGetArtistAlbums from "@hooks/useGetArtistAlbums";
import styles from "./FoundArtists.module.scss";
import { IFoundArtists } from "interfaces/foundArtist";
import { BiPlay } from "react-icons/bi";

const FoundArtists = ({ foundArtists }: IFoundArtists) => {
  const { getAlbums } = useGetArtistAlbums();
  const iconStyle = {
    color: "black",
    fontSize: "2rem",
    paddingLeft: "0.15rem",
  };

  return (
    <div className={styles.foundArtists}>
      <ul>
        {foundArtists.map((artist) => (
          <>
            <li
              key={`${artist.name}_${artist.genre}`}
              onClick={() => getAlbums(artist.url)}
            >
              <div className={styles.content}>
                <picture>
                  <img src={artist.imageUrl} alt="Artis Image" />
                </picture>
                <p className={styles.artistName}>{artist.name}</p>
                <p className={styles.artistTag}>Artist</p>
                <div className={styles.playButton}>
                  <BiPlay style={iconStyle} />
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default FoundArtists;
