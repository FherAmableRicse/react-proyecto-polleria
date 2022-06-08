import usePolleria from "../../hooks/usePolleria";
import "../../styles/css/PlatosCard.css";
const PlatosCard = ({ plato }) => {
  const { id, nombre, precio, imagen } = plato;
  const { platosCarrito, setPlatosCarrito } = usePolleria();

  const agregarCarrito = () => {
    setPlatosCarrito([...platosCarrito, plato]);
  };

  return (
    <div className="buscador__plato">
      <figure className="buscador__plato-image-container">
        <img src={imagen} alt={nombre} className="buscador__plato-image" />
      </figure>
      <h3 className="buscador__plato-title" id="platoTitle">
        {nombre}
      </h3>
      <h3 className="buscador__plato-precio">
        {precio.toLocaleString("es-PE", {
          style: "currency",
          currency: "PEN",
          minimumFractionDigits: 2,
        })}
      </h3>
      <button
        type="button"
        className="buscador__plato-boton"
        onClick={agregarCarrito}
      >
        Agregar
      </button>
    </div>
  );
};

export default PlatosCard;
