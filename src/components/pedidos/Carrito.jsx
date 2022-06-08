import usePolleria from "../../hooks/usePolleria";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CarritoCard from "./CarritoCard";
import Swal from 'sweetalert2';
import "../../styles/css/Carrito.css";

const Carrito = () => {
  const { platosCarrito, setPlatosCarrito } = usePolleria();
  const [mostrarPlatosCarrito, setmostrarPlatosCarrito] = useState(platosCarrito);
  // const urlWhatsapp = `${process.env.REACT_APP_URL}`;
  const urlWhatsapp = `https://www.google.com/`;

  const contarRepeticiones = (plato) => {
    const repeticiones = platosCarrito.reduce((total, platoCarrito) => {
      return platoCarrito.id === plato.id ? (total += 1) : total;
    }, 0);

    return repeticiones;
  };

  const vaciarCarrito = () => {
    setPlatosCarrito([]);
  };

  const confirmarPedido=(urlWhatsapp)=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-dark mx-2',
        cancelButton: 'btn btn-danger mx-2'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: '<strong>Por favor confirma tu pedido!</strong>',
      icon: 'question',
      reverseButtons: true,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: '¡No, cancélalo!',
      confirmButtonText:
        `<a class="text-light text-decoration-none" href='${urlWhatsapp}'
      target="_blank" rel="noopener noreferrer">¡Sí, confírmalo!</a>`
    })
  };

  useEffect(() => {
    localStorage.setItem("platosCarrito", JSON.stringify(platosCarrito));
    setmostrarPlatosCarrito(platosCarrito);
  }, [platosCarrito]);

  return (
    <div className="carrito">
      <h2 className="carrito__title">Carrito</h2>
      <ul id="carrito" className="carrito__lista-platos list-group">
        {[...new Set(mostrarPlatosCarrito)].map((plato) => {
          return (
            <CarritoCard
              key={uuidv4()}
              plato={plato}
              repeticion={contarRepeticiones(plato)}
            />
          );
        })}
      </ul>
      <p className="carrito__total">
        Total: S/.
        <span id="total">
          {mostrarPlatosCarrito.reduce((total, platosCarrito) => {
            return (total += platosCarrito.precio);
          }, 0)}
        </span>
      </p>
      <button
        id="boton-vaciar"
        className="btn btn-danger"
        onClick={vaciarCarrito}
      >
        Vaciar Carrito
      </button>
      <button
        id="boton-confirmar"
        className="btn btn-success"
        onClick={()=>confirmarPedido(urlWhatsapp)}
      >
        Confirmar Pedido
      </button>
    </div>
  );
};

export default Carrito;
