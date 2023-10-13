/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { useFoundArtistsStore } from "@store/useFoundArtistsStore";
import { useLoaderStore } from "@store/useLoaderStore";

const useGetArtistData = (filteredArtist: string) => {
  const [artistError, setArtistError] = useState(false);
  const { setFoundArtists } = useFoundArtistsStore();
  const { setShowLoader } = useLoaderStore();

  const getArtistData = async () => {
    setShowLoader(true);

    const getArtistDataOptions: AxiosRequestConfig<any> = {
      method: "GET",
      url: "http://localhost:3001/artist",
      params: { artist: filteredArtist },
    };

    await axios
      .request(getArtistDataOptions)
      .then((response): any => {
        if (typeof response.data === "string") {
          setArtistError(true);
          console.log("Error: ", artistError);
        }
        setFoundArtists(response.data);
      })
      .finally(() => setShowLoader(false))
      .catch((error) => {
        console.log(error);
      });
  };

  return { getArtistData };
};

export default useGetArtistData;
