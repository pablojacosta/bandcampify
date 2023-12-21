/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useLoaderStore } from "@store/useLoaderStore";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import { ESearchResultTypes } from "@constants/enums";

const useGetAlbumsForArtist = () => {
  const { setShowLoader } = useLoaderStore();
  const { setHideArtists, setArtistInfo, setFetchArtist } =
    useSelectedArtistStore();
  const { setHideAlbums } = useSelectedAlbumStore();

  const getAlbumsForArtist = async (artist: string) => {
    setShowLoader(true);
    setHideArtists(true);
    setHideAlbums(true);
    setFetchArtist(false);

    const getAlbums = async (artistUrl: string) => {
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

    const getAlbumsForArtistOptions: AxiosRequestConfig<any> = {
      method: "GET",
      url: "https://bandcampify.onrender.com/search",
      params: { artist },
    };

    await axios
      .request(getAlbumsForArtistOptions)
      .then((response: AxiosResponse<any, any>) => {
        const { url } = response.data.filter(
          (result: any) => result.type === ESearchResultTypes.ARTIST
        )[0];
        getAlbums(url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { getAlbumsForArtist };
};

export default useGetAlbumsForArtist;
