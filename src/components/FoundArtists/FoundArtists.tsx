/* eslint-disable @typescript-eslint/no-explicit-any */
import { IArtist } from "interfaces/artist";
import styles from "./FoundArtists.module.scss";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { AxiosRequestConfig } from "axios";
import axios from "axios";
import { useEffect } from "react";

interface IFoundArtists {
  foundArtists: IArtist[];
}

const FoundArtists = ({ foundArtists }: IFoundArtists) => {
  const { setArtistUrl, artistUrl, setAlbumsUrls, albumsUrls } =
    useSelectedArtistStore();

  useEffect(() => {
    console.log("artistUrl", artistUrl);

    const getAlbumsOptions: AxiosRequestConfig<any> = {
      method: "GET",
      url: "http://localhost:3001/albums",
      params: { artistUrl },
    };

    const getAlbums = async () => {
      await axios
        .request(getAlbumsOptions)
        .then((response): any => {
          setAlbumsUrls(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (artistUrl) {
      getAlbums().then(() => console.log("albumsUrls", albumsUrls));
    }
  }, [artistUrl, setAlbumsUrls, albumsUrls]);

  return (
    <div className={styles.foundArtists}>
      <ul>
        {foundArtists.map((artist) => (
          <li
            key={`${artist.name}_${artist.genre}`}
            onClick={() => setArtistUrl(artist.url)}
          >
            {artist.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoundArtists;
