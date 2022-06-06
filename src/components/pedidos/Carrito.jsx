import usePolleria from "../../hooks/usePolleria";
import { useEffect } from "react";
import CarritoCard from "./CarritoCard";

const Carrito = () => {
  const { platosCarrito } = usePolleria();
  useEffect(() => {
    console.log(platosCarrito);
  }, [platosCarrito]);
  return (
    <div className="col-sm-4">
      <h2 className="col-sm-4__title">Carrito</h2>
      <ul id="carrito" className="list-group">
        {platosCarrito.map((plato) => {
          return <CarritoCard key={plato.id} plato={plato} />;
        })}
      </ul>
      <p className="text-right">
        Total: S/.<span id="total"></span>
      </p>
      <button id="boton-vaciar" className="btn btn-danger">
        Vaciar
      </button>
    </div>
  );
};

export default Carrito;
