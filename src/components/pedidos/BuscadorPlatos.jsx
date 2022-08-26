import { useState } from "react";
import usePolleria from "../../hooks/usePolleria";
import PlatosCard from "./PlatosCard";
import "../../styles/css/BuscadorPlatos.css";

const BuscadorPlatos = () => {
  const { platos, buscarPlatos } = usePolleria();

  const [mostrarPlatos, setMostrarPlatos] = useState(
    JSON.parse(localStorage.getItem("listaPlatos"))
  );

  const handleInput = (e) => {
    setMostrarPlatos(buscarPlatos(platos, e.target.value));
  };

  return (
    <section className="buscador">
      <h2 className="buscador_title">Nuestra Carta</h2>
      <div className="buscador__container">
        <input
          type="text"
          className="buscador__input"
          placeholder="Ingrese su plato"
          id="buscadorInput"
          onChange={handleInput}
        />
        <div className="buscador__resultados">
          {mostrarPlatos.map((plato) => {
            return <PlatosCard key={plato.id} plato={plato} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BuscadorPlatos;
