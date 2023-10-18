/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderStore } from "@store/useLoaderStore";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const useGetArtistAlbums = () => {
  const { setAlbums, setArtistUrl, setHideArtists, setArtistImage } =
    useSelectedArtistStore();
  const { setShowLoader } = useLoaderStore();

  const getAlbums = async (artistUrl: string, artistImage: string) => {
    setShowLoader(true);
    setArtistUrl(artistUrl);
    setHideArtists(true);
    setArtistImage(artistImage);

    const getAlbumsOptions: AxiosRequestConfig<any> = {
      method: "GET",
      url: "/albums",
      params: { artistUrl },
    };

    await axios
      .request(getAlbumsOptions)
      .then((response: AxiosResponse<any, any>) => {
        setAlbums(response.data);
      })
      .finally(() => setShowLoader(false))
      .catch((error) => {
        console.log(error);
      });
  };

  return { getAlbums };
};

export default useGetArtistAlbums;
