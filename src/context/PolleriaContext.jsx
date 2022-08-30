import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

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
          'Authorization':`Bearer ${localStorage.getItem('token')}`,
          'Accept': 'application/json',
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          "fecha_registro":pedido.fecha_registro,
          "cliente_id":pedido.cliente_id,
          "lista_platos":pedido.lista_platos
        }),
      });
    }catch(error){
      console.log(error.response.data.message);
    }
  };

  const realizarPago=async (detallePago)=>{
    try{
      fetch(`${process.env.REACT_APP_URL_PLATOS_JSON_URL}/pagos`,{
        method:"POST",
        headers:{
          'Authorization':`Bearer ${localStorage.getItem('token')}`,
          'Accept':'application/json',
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          "numero_tarjeta":detallePago.numero_tarjeta,
          "fecha_vencimiento_tarjeta":detallePago.fecha_vencimiento_tarjeta,
          "cvv_tarjeta":detallePago.cvv_tarjeta,
          "nombre_tarjeta":detallePago.nombre_tarjeta,
          "apellido_tarjeta":detallePago.apellido_tarjeta,
          "email_tarjeta":detallePago.email_tarjeta,
          "cuotas":detallePago.cuotas,
          "monto":detallePago.monto
        })
      });
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