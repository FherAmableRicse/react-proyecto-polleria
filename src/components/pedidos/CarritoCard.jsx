import usePolleria from "../../hooks/usePolleria";
import "../../styles/css/Carrito.css";

const CarritoCard = ({ plato, repeticion }) => {
  const { platosCarrito, setPlatosCarrito } = usePolleria();
  const { id, nombre, precio, imagen } = plato;

  const eliminarPlato = () => {
    const platoEliminar = plato;
    setPlatosCarrito(
      platosCarrito.filter((plato) => {
        return plato.id !== platoEliminar.id;
      })
    );
  };

  return (
    <li className="carrito__plato">
      <h5 className="carrito__plato-cantidad">{repeticion+" und"}</h5>
      <h5 className="carrito__plato-title" id="platoTitle">
        {nombre}
      </h5>
      <h5 className="carrito__plato-precio">
        {(precio * repeticion).toLocaleString("es-PE", {
          style: "currency",
          currency: "PEN",
          minimumFractionDigits: 2,
        })}
      </h5>
      <button
        type="button"
        className="carrito__plato-boton"
        onClick={eliminarPlato}
      >
        X
      </button>
    </li>
  );
};

export default CarritoCard;
