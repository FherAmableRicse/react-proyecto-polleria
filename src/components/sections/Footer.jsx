import "../../styles/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="redes">
      <div className="footer-container">
        <nav className="footer-nav-redes">
          <h2 className="footer-nav-redes__header">Nuestras Redes</h2>
          <a href="#" className="footer-nav-redes__link-one">
            <img
              src="https://i.postimg.cc/sfJtqS4W/instagram.png"
              alt="Instagram"
              width="32px"
            />
          </a>
          <a href="#" className="footer-nav-redes__link-two">
            <img
              src="https://i.postimg.cc/7YHyZXZX/facebook.png"
              alt="Facebook"
              width="32px"
            />
          </a>
          <a href="#" className="footer-nav-redes__link-three">
            <img
              src="https://i.postimg.cc/dtPYcvbM/youtube.png"
              alt="YouTube"
              width="32px"
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
                  <a href="#" className="footer-nav-navegation__link">
                    Informacion de la empresa
                  </a>
                </li>
                <li className="footer-nav-navegation__link-item">
                  <a href="#" className="footer-nav-navegation__link">
                    Nuestros locales
                  </a>
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
                  <a href="#" className="footer-nav-navegation__link">
                    Preguntas frecuentes
                  </a>
                </li>
                <li className="footer-nav-navegation__link-item">
                  <a href="#" className="footer-nav-navegation__link">
                    Reclamos
                  </a>
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
                    (01)500 2550
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
                  <span className="footer-nav-navegation__link-header">Email </span>
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
