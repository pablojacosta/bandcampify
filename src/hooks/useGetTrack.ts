/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderStore } from "@store/useLoaderStore";
import { useSelectedAlbumStore } from "@store/useSelectedAlbumStore";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const useGetTrack = () => {
  const { setAlbum } = useSelectedAlbumStore();
  const { setShowLoader } = useLoaderStore();

  const getTrack = async (trackUrl: string) => {
    setShowLoader(true);

    const getTrackOptions: AxiosRequestConfig<any> = {
      method: "GET",
      url: "http://localhost:3001/track",
      params: { trackUrl },
    };

    await axios
      .request(getTrackOptions)
      .then((response: AxiosResponse<any, any>) => {
        setAlbum(response.data);
      })
      .finally(() => setShowLoader(false))
      .catch((error) => {
        console.log(error);
      });
  };

  return { getTrack };
};

export default useGetTrack;
