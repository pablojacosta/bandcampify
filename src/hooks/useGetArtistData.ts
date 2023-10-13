/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { IArtist } from "interfaces/artist";

const useGetArtistData = (filteredArtist: string) => {
  const [artistError, setArtistError] = useState(false);
  const [foundArtists, setFoundArtists] = useState<IArtist[]>([]);

  const getArtistData = async () => {
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
      .catch((error) => {
        console.log(error);
      });
  };

  return { getArtistData };
};

export default useGetArtistData;
