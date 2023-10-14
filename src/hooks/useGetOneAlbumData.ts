/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderStore } from "@store/useLoaderStore";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
// import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const useGetOneAlbumData = () => {
  const { setHideAlbums, setSelectedAlbum } = useSelectedAlbumStore();
  const { setShowLoader } = useLoaderStore();

  const getOneAlbum = async (albumUrl: string) => {
    setShowLoader(true);
    setHideAlbums(true);

    const getOneAlbumOptions: AxiosRequestConfig<any> = {
      method: "GET",
      url: "http://localhost:3001/album",
      params: { albumUrl },
    };

    await axios
      .request(getOneAlbumOptions)
      .then((response: AxiosResponse<any, any>) => {
        setSelectedAlbum(response.data);
      })
      .finally(() => setShowLoader(false))
      .catch((error) => {
        console.log(error);
      });
  };

  return { getOneAlbum };
};

export default useGetOneAlbumData;
