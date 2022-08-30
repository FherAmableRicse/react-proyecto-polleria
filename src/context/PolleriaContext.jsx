import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import {GetPlatos} from "../services/platosServices";
import {PostPedido} from "../services/pedidosServices";
import {PostPago} from "../services/pagoServices";

export const PolleriaContext = createContext();

export const PolleriaProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [platos, setPlatos] = useState([]);
  const [montoTotal,setMontoTotal]=useState(0);
  const [pedidoCliente,setPedidoCliente]=useState({});
  const [platosCarrito, setPlatosCarrito] = useState(
    JSON.parse(localStorage.getItem("platosCarrito"))
      ? JSON.parse(localStorage.getItem("platosCarrito"))
      : []
  );
  const [usuarioId, setUsuarioId]=useState("");
  const [usuario, setUsuario]=useState("");
  const [procederPago,setProcederPago]=useState(false);

  const getPlatos = async () => {
    try {
      setLoading(true);
      const data=await GetPlatos();
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
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("listaPlatos", JSON.stringify(platos));
  }, [platos]);

  const crearPedido=async (pedido)=>{
    try{
      await PostPedido(pedido);
    }catch(error){
      console.log(error.response.data.message);
    }
  };

  const realizarPago=async (detallePago)=>{
    try{
      await PostPago(detallePago)
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: "Pago exitoso",
        showConfirmButton: false,
        timer: 1500
    })
    }catch(error){
      console.log(error);
    }
  }

  return (
    <PolleriaContext.Provider
      value={{
        loading,
        platos,
        platosCarrito,
        usuarioId,
        usuario,
        procederPago,
        montoTotal,
        pedidoCliente,
        setPlatos,
        getPlatos,
        buscarPlatos,
        setMontoTotal,
        setPlatosCarrito,
        setUsuarioId,
        setUsuario,
        crearPedido,
        setProcederPago,
        realizarPago,
        setPedidoCliente
      }}
    >
      {children}
    </PolleriaContext.Provider>
  );
};