import {useState} from "react";
import usePolleria from "../hooks/usePolleria";
import { Navigate } from "react-router-dom";
import BuscadorPlatos from "../components/pedidos/BuscadorPlatos";
import Carrito from "../components/pedidos/Carrito";
import FormularioPago from "../components/pedidos/FormularioPago";
import { isAuthValid } from "../services/authServices";
import "../styles/css/Pedidos.css";

const Pedidos = () => {
  const [visible, setVisible] = useState(false);
  const {procederPago}=usePolleria();

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else if (window.scrollY <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  if(!isAuthValid()) return <Navigate to={"/login"}/>

  return (
    <section className="pedidos">
        {
          procederPago ?(
            <div className="pedidos-container">
              <FormularioPago/>
            </div>
          ):(
            <div className="pedidos-container">
              <Carrito/>
              <BuscadorPlatos/>
            </div>
          )
        }
      <div className="go-up">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-caret-up-square-fill boton"
          viewBox="0 0 16 16"
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        >
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11z" />
        </svg>
      </div>
    </section>
  );
};

export default Pedidos;
