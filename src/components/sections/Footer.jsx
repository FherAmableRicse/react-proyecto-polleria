import { Link } from "react-router-dom";
import "../../styles/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="redes">
      <div className="footer-container">
        <nav className="footer-nav-redes">
          <h2 className="footer-nav-redes__header">Nuestras Redes</h2>
          <a
            href="https://www.instagram.com/poll.opicom/"
            className="footer-nav-redes__link-one"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/sfJtqS4W/instagram.png"
              alt="Instagram"
              className="footer-nav-redes__link-image"
            />
          </a>
          <a
            href="https://es-la.facebook.com/picompollo/"
            className="footer-nav-redes__link-two"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/7YHyZXZX/facebook.png"
              alt="Facebook"
              className="footer-nav-redes__link-image"
            />
          </a>
          <a
            href="https://www.youtube.com/watch?v=EyRJM5et0Pg&ab_channel=elcholomena"
            className="footer-nav-redes__link-three"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/dtPYcvbM/youtube.png"
              alt="YouTube"
              className="footer-nav-redes__link-image"
            />
          </a>
        </nav>
        <nav className="footer-nav-navegation">
          <ul className="footer-nav-navegation__menu-list">
            <li className="footer-nav-navegation__menu-item">
              <label
                htmlFor="footerNavCheckboxNosotros"
                className="footer-nav-navegation__menu-name"
              >
                Nosotros
              </label>
              <input
                type="checkbox"
                id="footerNavCheckboxNosotros"
                className="footer-nav-navegation__checkbox"
              />
              <ul className="footer-nav-navegation__link-list">
                <li className="footer-nav-navegation__link-item">
                  <Link
                    to="nosotros"
                    className="footer-nav-navegation__link"
                    onClick={(e) => {
                      window.scrollTo({ top: 0 });
                    }}
                  >
                    Informacion de la empresa
                  </Link>
                </li>
                <li className="footer-nav-navegation__link-item">
                  <Link
                    to="locales"
                    className="footer-nav-navegation__link"
                    onClick={(e) => {
                      window.scrollTo({ top: 0 });
                    }}
                  >
                    Nuestros locales
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer-nav-navegation__menu-item">
              <label
                htmlFor="footerNavCheckboxAtencion"
                className="footer-nav-navegation__menu-name"
              >
                Atencion al cliente
              </label>
              <input
                type="checkbox"
                id="footerNavCheckboxAtencion"
                className="footer-nav-navegation__checkbox"
              />
              <ul className="footer-nav-navegation__link-list">
                <li className="footer-nav-navegation__link-item">
                  <Link
                    to="preguntas"
                    className="footer-nav-navegation__link"
                    onClick={(e) => {
                      window.scrollTo({ top: 0 });
                    }}
                  >
                    Preguntas frecuentes
                  </Link>
                </li>
                <li className="footer-nav-navegation__link-item">
                  <Link
                    to="reclamos"
                    className="footer-nav-navegation__link"
                    onClick={(e) => {
                      window.scrollTo({ top: 0 });
                    }}
                  >
                    Reclamos
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer-nav-navegation__menu-item">
              <label
                htmlFor="footerNavCheckboxContacto"
                className="footer-nav-navegation__menu-name"
              >
                Informacion de Contacto
              </label>
              <input
                type="checkbox"
                id="footerNavCheckboxContacto"
                className="footer-nav-navegation__checkbox"
              />
              <ul className="footer-nav-navegation__link-list">
                <li className="footer-nav-navegation__link-item-contactos">
                  <span className="footer-nav-navegation__link-header">
                    Central en Lima
                  </span>
                  <span className="footer-nav-navegation__link-text">
                    (01) 500 2550
                  </span>
                </li>
                <li className="footer-nav-navegation__link-item-contactos">
                  <span className="footer-nav-navegation__link-header">
                    Huancayo
                  </span>
                  <span className="footer-nav-navegation__link-text">
                    (064) 211445
                  </span>
                </li>
                <li className="footer-nav-navegation__link-item-contactos">
                  <span className="footer-nav-navegation__link-header">
                    Email{" "}
                  </span>
                  <span className="footer-nav-navegation__link-text">
                    pollopicon@gmail.com
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
