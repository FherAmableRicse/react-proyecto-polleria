import BuscadorPlatos from "../components/pedidos/BuscadorPlatos";
import Carrito from "../components/pedidos/Carrito";
import "../styles/css/Pedidos.css";

const Pedidos = () => {
  return (
    <section className="pedidos">
      <div className="pedidos-container">
        <Carrito/>
        <BuscadorPlatos/>
      </div>
    </section>
  );
};

export default Pedidos;
