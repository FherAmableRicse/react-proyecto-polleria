const Pedidos = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div>
            <h2>Carta</h2>
          </div>
          <div className="buscador__container">
            <input
              type="text"
              className="buscador__input"
              placeholder="Ingrese su plato"
              id="buscadorInput"
              required
            />
            <div className="buscador__resultados" id="buscadorResultados"></div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Pedidos;
