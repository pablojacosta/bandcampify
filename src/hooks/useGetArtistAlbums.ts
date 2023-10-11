/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelectedArtistStore } from "@store/useSelectedArtistStore";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";

const useGetArtistAlbums = () => {
  const { setAlbums, setArtistUrl } = useSelectedArtistStore();
  const [isAlbumsLoading, setIsAlbumsLoading] = useState(false);

  // useEffect(() => {
  //   if (!artistUrl || isAlbumsLoading) {
  //     setShowLoader(true);
  //     return;
  //   }

  //   setShowLoader(false);
  // }, [isAlbumsLoading, artistUrl, setShowLoader]);

  console.log("isAlbumsLoading", isAlbumsLoading);

  const getAlbums = async (artistUrl: string) => {
    setIsAlbumsLoading(true);
    setArtistUrl(artistUrl);

    const getAlbumsOptions: AxiosRequestConfig<any> = {
      method: "GET",
      url: "http://localhost:3001/albums",
      params: { artistUrl },
    };

    await axios
      .request(getAlbumsOptions)
      .then((response: AxiosResponse<any, any>) => {
        setAlbums(response.data);
      })
      .finally(() => setIsAlbumsLoading(false))
      .catch((error) => {
        console.log(error);
      });
  };

  return { getAlbums };
};

export default useGetArtistAlbums;
