/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useLoaderStore } from "@store/useLoaderStore";
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";

const useGetArtistData = () => {
  const { setShowLoader } = useLoaderStore();
  const { setArtistName, setArtistImage } = useSelectedArtistStore();

  const getArtistData = async (artistUrl: string) => {
    setShowLoader(true);

    const getArtistDataOptions: AxiosRequestConfig<any> = {
      method: "GET",
      url: "/artist",
      params: { artistUrl },
    };

    await axios
      .request(getArtistDataOptions)
      .then((response: AxiosResponse<any, any>) => {
        setArtistName(response.data.name);
        setArtistImage(response.data.imageUrl);
      })
      .finally(() => {
        setShowLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { getArtistData };
};

export default useGetArtistData;
