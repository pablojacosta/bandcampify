/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderStore } from "@store/useLoaderStore";
import { useSelectedTrackStore } from "@store/useSelectedTrackStore";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const useGetTrack = () => {
  const { setTrack } = useSelectedTrackStore();
  const { setShowLoader } = useLoaderStore();

  const getTrack = async (trackUrl: string) => {
    setShowLoader(true);

    const getTrackOptions: AxiosRequestConfig<any> = {
      method: "GET",
      url: "http://149.50.135.185:3001/track",
      params: { trackUrl },
    };

    await axios
      .request(getTrackOptions)
      .then((response: AxiosResponse<any, any>) => {
        setTrack(response.data);
      })
      .finally(() => setShowLoader(false))
      .catch((error) => {
        console.log(error);
      });
  };

  return { getTrack };
};

export default useGetTrack;
