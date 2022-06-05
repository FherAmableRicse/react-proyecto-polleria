const BuscadorPlatos = () => {
  return (
    <div className="my-8 col-sm-8">
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
  );
};

export default BuscadorPlatos;
