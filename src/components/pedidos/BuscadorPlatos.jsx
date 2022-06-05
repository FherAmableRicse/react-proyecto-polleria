import usePolleria from "../../hooks/usePolleria";
import PlatosCard from "./PlatosCard";
const BuscadorPlatos = () => {
  const {platos}=usePolleria();

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
          required
        />
        <div className="buscador__resultados">
          {
            platos.map((plato)=>{
              return(
                <PlatosCard key={plato.id} plato={plato}/>
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default BuscadorPlatos;
