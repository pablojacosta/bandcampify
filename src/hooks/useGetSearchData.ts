/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";
import { useFoundResultsStore } from "@store/useFoundResultsStore";
import { useLoaderStore } from "@store/useLoaderStore";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";

const useGetSearchData = () => {
  const [artistError, setArtistError] = useState(false);
  const { setFoundResults } = useFoundResultsStore();
  const { setShowLoader } = useLoaderStore();
  const { setHideArtists } = useSelectedArtistStore();
  const { setHideAlbums } = useSelectedAlbumStore();

  const getSearchData = async (search: string) => {
    setShowLoader(true);
    setHideArtists(true);
    setHideAlbums(true);

    const getSearchDataOptions: AxiosRequestConfig<any> = {
      method: "GET",
      url: "http://localhost:3001/search",
      params: { artist: search },
    };

    console.log("search in hook", search);

    await axios
      .request(getSearchDataOptions)
      .then((response: AxiosResponse<any, any>) => {
        if (typeof response.data === "string") {
          setArtistError(true);
          console.log("Error: ", artistError);
        }
        setFoundResults(response.data);
        setHideArtists(false);
      })
      .finally(() => setShowLoader(false))
      .catch((error) => {
        console.log(error);
      });
  };

  return { getSearchData };
};

export default useGetSearchData;
