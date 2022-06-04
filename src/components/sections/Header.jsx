import "../../styles/css/Header.css";
import logo from "../../assets/img/logo.png";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerNavMenuLinkList = useRef();

  const openMenu = () => {
    headerNavMenuLinkList.current.classList.add(
      "header-nav__menu-link-list--open"
    );
  };

  const closeMenu = () => {
    headerNavMenuLinkList.current.classList.remove(
      "header-nav__menu-link-list--open"
    );
  };
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-nav__container-superior">
          <ul className="header-nav__menu-link-list">
            <li className="header-nav__menu-link-item">
              <p>🍗Atención desde: 12:00hrs</p>
            </li>
            <li className="header-nav__menu-link-item">
              <p>📞Lima: (01)500 2550</p>
            </li>
            <li className="header-nav__menu-link-item">
              <p>📞Huancayo: (064) 211445</p>
            </li>
          </ul>
          <a href="#" className="header-nav__register-link">
            👩‍🍳 Ingresar/Registrarse
          </a>
        </div>
        <div className="header-nav__container">
          <a href="/" className="header-nav__link-logo-container">
            <img src={logo}  alt="Logo Pollería PICOM"className="header-nav__link-logo"/>
          </a>
          <button className="header-nav__menu-icon-container"  onClick={openMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="header-nav__menu-icon" >
              <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
            </svg>
          </button>
          <ul className="header-nav__menu-link-list" ref={headerNavMenuLinkList} >
            <li className="header-nav__menu-link-item">
              <a href="#inicio" className="header-nav__menu-link header-nav__menu-link--active">INICIO</a>
            </li>
            <li className="header-nav__menu-link-item">
              <Link to="/pedidos" className="header-nav__menu-link">EMPIEZA TU PEDIDO</Link>
            </li>
            <li className="header-nav__menu-link-item">
              <a href="#" className="header-nav__menu-link">RESERVAS</a>
            </li>
            <li className="header-nav__menu-link-item">
              <a href="#" className="header-nav__menu-link">NOSOTROS </a>
            </li>
            <li className="header-nav__menu-link-item">
              <Link to="/contacto" className="header-nav__menu-link">CONTÁCTENOS</Link>
            </li>
            <li className="header-nav__menu-link-item header-nav__menu-close-icon-container" onClick={closeMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="header-nav__menu-close-icon">
                <path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path>
                <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path>
              </svg>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
