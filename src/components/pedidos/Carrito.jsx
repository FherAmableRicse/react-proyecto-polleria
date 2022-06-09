import usePolleria from "../../hooks/usePolleria";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CarritoCard from "./CarritoCard";
import Swal from "sweetalert2";
import "../../styles/css/Carrito.css";

const Carrito = () => {
  const { platosCarrito, setPlatosCarrito } = usePolleria();
  const [mostrarPlatosCarrito, setmostrarPlatosCarrito] =
    useState(platosCarrito);
  const urlWhatsapp = `${process.env.REACT_APP_URL2}`;
  // const urlWhatsapp = `https://www.google.com/`;

  const contarRepeticiones = (plato) => {
    const repeticiones = platosCarrito.reduce((total, platoCarrito) => {
      return platoCarrito.id === plato.id ? (total += 1) : total;
    }, 0);
    return repeticiones;
  };

  const vaciarCarrito = () => {
    setPlatosCarrito([]);
  };

  const confirmarPedido = (urlWhatsapp) => {
    const strPedido = mostrarPlatosCarrito.reduce((final, platoMostrar) => {
      return (final +=
        "(" +
        contarRepeticiones(platoMostrar) +
        ")" +
        "und" +
        " " +
        platoMostrar.nombre +
        ", ");
    }, "");
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-dark mx-2",
        cancelButton: "btn btn-danger mx-2",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons.fire({
      title: "<strong>Por favor confirma tu pedido!</strong>",
      icon: "question",
      reverseButtons: true,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: "¡No, cancélalo!",
      confirmButtonText: `<a class="text-light text-decoration-none" href='${urlWhatsapp} ${strPedido}'
      target="_blank" rel="noopener noreferrer">¡Sí, confírmalo!</a>`,
    });
  };

  useEffect(() => {
    setmostrarPlatosCarrito(
      platosCarrito.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.id === value.id)
      )
    );
    localStorage.setItem("platosCarrito", JSON.stringify(platosCarrito));
  }, [platosCarrito]);

  return (
    <div className="carrito">
      <h2 className="carrito__title">Carrito</h2>
      <ul id="carrito" className="carrito__lista-platos">
        {mostrarPlatosCarrito.map((plato) => {
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
          {platosCarrito.reduce((total, platosCarrito) => {
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
      {platosCarrito.length ? (
        <button
          id="boton-confirmar"
          className="btn btn-success"
          onClick={() => confirmarPedido(urlWhatsapp, platosCarrito)}
        >
          Confirmar Pedido
        </button>
      ) : null}
    </div>
  );
};

export default Carrito;
