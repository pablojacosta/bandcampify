/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderStore } from "@store/useLoaderStore";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const useGetArtistAlbums = () => {
  const { setArtistUrl, setHideArtists, setArtistImage, setArtistInfo } =
    useSelectedArtistStore();
  const { setHideAlbums } = useSelectedAlbumStore();
  const { setShowLoader } = useLoaderStore();

  const getAlbums = async (artistUrl: string, artistImage: string) => {
    setShowLoader(true);
    setArtistUrl(artistUrl);
    setHideArtists(true);
    setArtistImage(artistImage);

    const getAlbumsOptions: AxiosRequestConfig<any> = {
      method: "GET",
      url: "https://bandcampify.onrender.com/albums",
      params: { artistUrl },
    };

    await axios
      .request(getAlbumsOptions)
      .then((response: AxiosResponse<any, any>) => {
        setArtistInfo(response.data);
      })
      .finally(() => {
        setShowLoader(false);
        setHideAlbums(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { getAlbums };
};

export default useGetArtistAlbums;
