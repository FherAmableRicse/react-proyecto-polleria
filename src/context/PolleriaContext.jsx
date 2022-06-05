import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PolleriaContext = createContext();

export const PolleriaProvider = ({ children }) => {
  const [platos, setPlatos] = useState([]);

  const getPlatos = async () => {
    try {
      const options = {
        method: "GET",
        // url: `${process.env.REACT_APP_URL_PLATOS_JSON_URL}`,
        url: `https://fheramablericse.github.io/api-test/db.json`,
      };
      const { data } = await axios(options);
      setPlatos(data);
    } catch (error) {
      console.log(error.response.data.message);
    } finally {
      //mostrat platos
    }
  };

  useEffect(() => {
    getPlatos();
  }, []);

  return (
    <PolleriaContext.Provider
      value={{
        platos,
        getPlatos,
      }}
    >
      {children}
    </PolleriaContext.Provider>
  );
};
