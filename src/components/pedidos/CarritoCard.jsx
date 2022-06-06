const CarritoCard = ({ plato }) => {
  const { id, nombre, precio, imagen } = plato;
  return (
    <div className="carrito__plato">
      <h7 className="carrito__plato-title" id="platoTitle">
        {nombre}
      </h7>
      <h7 className="carrito__plato-precio">
        {precio.toLocaleString("es-PE", {
          style: "currency",
          currency: "PEN",
          minimumFractionDigits: 2,
        })}
      </h7>
      <button
        type="button"
        className="carrito__plato-boton"
      >
        X
      </button>
    </div>
  );
};

export default CarritoCard;
