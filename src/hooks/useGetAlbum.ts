/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderStore } from "@store/useLoaderStore";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const useGetAlbum = () => {
  const { setAlbum } = useSelectedAlbumStore();
  const { setShowLoader } = useLoaderStore();

  const getAlbum = async (albumUrl: string) => {
    setShowLoader(true);

    const getAlbumsOptions: AxiosRequestConfig<any> = {
      method: "GET",
      url: "http://localhost:3001/album",
      params: { albumUrl },
    };

    await axios
      .request(getAlbumsOptions)
      .then((response: AxiosResponse<any, any>) => {
        setAlbum(response.data);
      })
      .finally(() => setShowLoader(false))
      .catch((error) => {
        console.log(error);
      });
  };

  return { getAlbum };
};

export default useGetAlbum;
