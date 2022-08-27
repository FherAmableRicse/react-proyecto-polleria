import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PolleriaContext = createContext();

export const PolleriaProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [platos, setPlatos] = useState([]);
  const [platosCarrito, setPlatosCarrito] = useState(
    JSON.parse(localStorage.getItem("platosCarrito"))
      ? JSON.parse(localStorage.getItem("platosCarrito"))
      : []
  );
  const [usuario, setUsuario]=useState({});
  const [isAuthenticated, setIsAuthenticated]=useState(false);

  const getPlatos = async () => {
    try {
      setLoading(true);
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_URL_PLATOS_JSON_URL}/platos`,
      };
      const { data } = await axios(options);
      setPlatos(data);
    } catch (error) {
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const crearLocalStorageCarrito = () => {
    if (!JSON.parse(localStorage.getItem("platosCarrito"))) {
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
    crearLocalStorageCarrito();
  }, []);

  useEffect(() => {
    localStorage.setItem("listaPlatos", JSON.stringify(platos));
  }, [platos]);

  const crearPedido=async (pedido)=>{
    try{
      fetch(`${process.env.REACT_APP_URL_PLATOS_JSON_URL}/pedidos`,{
        method:"POST",
        headers:{
          'Accept': 'application/json',
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          "id":pedido.id,
          "fecha_registro":pedido.fecha_registro,
          "cliente_id":pedido.cliente_id,
          "lista_platos":pedido.lista_platos
        }),
      });
    }catch(error){
      console.log(error.response.data.message);
    }
  };

  return (
    <PolleriaContext.Provider
      value={{
        loading,
        platos,
        platosCarrito,
        usuario,
        setPlatos,
        getPlatos,
        buscarPlatos,
        setPlatosCarrito,
        setUsuario,
        crearPedido,
        isAuthenticated,
        setIsAuthenticated
      }}
    >
      {children}
    </PolleriaContext.Provider>
  );
};
