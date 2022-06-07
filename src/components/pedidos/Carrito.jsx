import usePolleria from "../../hooks/usePolleria";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CarritoCard from "./CarritoCard";
import "../../styles/css/Carrito.css";

const Carrito = () => {
  const { platosCarrito, setPlatosCarrito } = usePolleria();

  const contarRepeticiones = (plato) => {
    const repeticiones = platosCarrito.reduce((total, platoCarrito) => {
      return platoCarrito.id === plato.id ? (total += 1) : total;
    }, 0);

    return repeticiones;
  };

  const vaciarCarrito = () => {
    setPlatosCarrito([]);
  };

  useEffect(() => {}, [platosCarrito]);

  return (
    <div className="col-sm-4">
      <h2 className="col-sm-4__title">Carrito</h2>
      <ul id="carrito" className="carrito list-group">
        {[...new Set(platosCarrito)].map((plato) => {
          return (
            <CarritoCard
              key={uuidv4()}
              plato={plato}
              repeticion={contarRepeticiones(plato)}
            />
          );
        })}
      </ul>
      <p className="text-right">
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
        Vaciar
      </button>
    </div>
  );
};

export default Carrito;
