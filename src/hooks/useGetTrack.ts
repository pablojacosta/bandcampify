/* eslint-disable @typescript-eslint/no-explicit-any */
import { SERVER_URL } from "@constants/env";
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
      url: `${SERVER_URL}/track`,
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
