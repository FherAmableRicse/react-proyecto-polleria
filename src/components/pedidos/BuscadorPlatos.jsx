import { useEffect, useState } from "react";
import usePolleria from "../../hooks/usePolleria";
import PlatosCard from "./PlatosCard";

const BuscadorPlatos = () => {
  const { platos, buscarPlatos } = usePolleria();
  let platosBuscados = [];
  let platosMostrar = [];

  const handleInput = (e) => {
    platosBuscados = buscarPlatos(platos, e.target.value);
  };

  // useEffect(() => {
  //   platosMostrar = platosBuscados.map((plato) => {
  //     return <PlatosCard key={plato.id} plato={plato} />;
  //   });
  // }, [platosBuscados]);

  return (
    <section className="my-8 col-sm-8">
      <div>
        <h2>Carta</h2>
      </div>
      <div className="buscador__container">
        <input
          type="text"
          className="buscador__input"
          placeholder="Ingrese su plato"
          id="buscadorInput"
          onChange={handleInput}
        />
        <div className="buscador__resultados">
          {platos.map((plato) => {
            return <PlatosCard key={plato.id} plato={plato} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BuscadorPlatos;
