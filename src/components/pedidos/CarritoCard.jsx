import usePolleria from "../../hooks/usePolleria";

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
    <div className="carrito__plato">
      <h5 className="carrito__plato-cantidad">{repeticion}</h5>
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
    </div>
  );
};

export default CarritoCard;
