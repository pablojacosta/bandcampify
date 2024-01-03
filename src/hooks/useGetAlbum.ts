/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderStore } from "@store/useLoaderStore";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IAlbum } from "interfaces/album";
import { IAlbumTrack } from "interfaces/albumTrack";

const useGetAlbum = () => {
  const { setAlbum, setAlbumStreamUrls } = useSelectedAlbumStore();
  const { setShowLoader } = useLoaderStore();

  const getTracksStreamUrls = (album: IAlbum) => {
    return album.tracks.map((track: IAlbumTrack) => track.streamUrl);
  };

  const getAlbum = async (albumUrl: string) => {
    setShowLoader(true);

    const getAlbumsOptions: AxiosRequestConfig<any> = {
      method: "GET",
      url: "https://api.bandcampify.com/album",
      params: { albumUrl },
    };

    await axios
      .request(getAlbumsOptions)
      .then((response: AxiosResponse<any, any>) => {
        setAlbum(response.data);
        setAlbumStreamUrls(getTracksStreamUrls(response.data));
      })
      .finally(() => setShowLoader(false))
      .catch((error) => {
        console.log(error);
      });
  };

  return { getAlbum };
};

export default useGetAlbum;
