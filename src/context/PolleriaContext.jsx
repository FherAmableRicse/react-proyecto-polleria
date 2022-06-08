import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PolleriaContext = createContext();

export const PolleriaProvider = ({ children }) => {
  const [platos, setPlatos] = useState([]);
  const [platosCarrito, setPlatosCarrito] = useState(
    JSON.parse(localStorage.getItem("platosCarrito"))
      ? JSON.parse(localStorage.getItem("platosCarrito"))
      : []
  );

  const getPlatos = async () => {
    try {
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_URL_PLATOS_JSON_URL}`,
        // url: `https://fheramablericse.github.io/api-test/db.json`,
      };
      const { data } = await axios(options);
      setPlatos(data);
    } catch (error) {
      console.log(error.response.data.message);
    } finally {
      //mostrat platos
    }
  };

  const getCarrito = () => {
    if (JSON.parse(localStorage.getItem("platosCarrito"))) {
      setPlatosCarrito(JSON.parse(localStorage.getItem("platosCarrito")));
    } else {
      localStorage.setItem("platosCarrito", JSON.stringify(platosCarrito));
    }
  };

  const buscarPlatos = (platos, input) => {
    const platosBuscados = platos.filter((element) => {
      if (input.toLowerCase() === "") {
        return platos;
      } else {
        return element.nombre.toLowerCase().includes(input.toLowerCase());
      }
    });
    return platosBuscados;
  };

  useEffect(() => {
    getPlatos();
    getCarrito();
  }, []);

  useEffect(() => {
    localStorage.setItem("listaPlatos", JSON.stringify(platos));
  }, [platos]);

  return (
    <PolleriaContext.Provider
      value={{
        platos,
        platosCarrito,
        setPlatos,
        getPlatos,
        buscarPlatos,
        setPlatosCarrito,
      }}
    >
      {children}
    </PolleriaContext.Provider>
  );
};
