import axios from "axios";

export const GetPlatos = async () => {
    const options = {
        method: "GET",
        url: `${process.env.REACT_APP_API_URL_BACKEND}/platos`,
      };
      const { data } = await axios(options);
      return data;
  };