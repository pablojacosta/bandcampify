/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const useWakeRenderServerUp = () => {
  const wakeServer = async () => {
    const wakeServerOptions: AxiosRequestConfig<any> = {
      method: "GET",
      url: "https://bandcampify.onrender.com/",
    };

    await axios
      .request(wakeServerOptions)
      .then((response: AxiosResponse<any, any>) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { wakeServer };
};

export default useWakeRenderServerUp;
