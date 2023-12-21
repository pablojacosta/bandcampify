/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useFoundResultsStore } from "@store/useFoundResultsStore";
import { useLoaderStore } from "@store/useLoaderStore";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { SERVER_URL } from "@constants/env";

const useGetSearchData = () => {
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
      url: `${SERVER_URL}/search`,
      params: { artist: search },
    };

    await axios
      .request(getSearchDataOptions)
      .then((response: AxiosResponse<any, any>) => {
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
