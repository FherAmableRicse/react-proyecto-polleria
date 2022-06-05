const Carrito = () => {
  return (
    <div className="col-sm-4">
      <h2 className="col-sm-4__title">Carrito</h2>
      <ul id="carrito" className="list-group"></ul>
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
