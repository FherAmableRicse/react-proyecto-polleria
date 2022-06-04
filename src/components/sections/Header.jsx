import "../../styles/css/Header.css";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerNavMenuLinkList = useRef();
  const headerNavMenuLink = useRef();
  const header = useRef();
  const headerNav = useRef();

  const documentScroll = () => {
    header.current.classList.toggle('header--scroll', window.scrollY > 0);
    headerNav.current.classList.toggle('header-nav--scroll', window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", documentScroll);
  }, [documentScroll])

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
    <header className="header" ref={header}>
      <nav className="header-nav" ref={headerNav}>
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
          <Link to="" className="header-nav__register-link">
            👩‍🍳 Ingresar/Registrarse
          </Link>
        </div>
        <div className="header-nav__container">
          <Link to="" className="header-nav__link-logo-container">
            <img src="https://i.postimg.cc/Cx0GhqjK/logo.png" alt="Logo Pollería PICOM" className="header-nav__link-logo" />
          </Link>
          <button className="header-nav__menu-icon-container" onClick={openMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="header-nav__menu-icon" >
              <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
            </svg>
          </button>
          <ul className="header-nav__menu-link-list" ref={headerNavMenuLinkList} >
            <li className="header-nav__menu-link-item">
              <Link to="" className="header-nav__menu-link header-nav__menu-link--active" onClick={closeMenu}>INICIO</Link>
            </li>
            <li className="header-nav__menu-link-item">
<<<<<<< HEAD
              <Link to="/pedidos" className="header-nav__menu-link">EMPIEZA TU PEDIDO</Link>
=======
              <Link to="pedidos" className="header-nav__menu-link" ref={headerNavMenuLink} onClick={closeMenu}>EMPIEZA TU PEDIDO</Link>
>>>>>>> c6277d9393f6cf55dea730b8a308af2bce5e95d1
            </li>
            <li className="header-nav__menu-link-item">
              <Link to="reservas" className="header-nav__menu-link" ref={headerNavMenuLink} onClick={closeMenu}>RESERVAS</Link>
            </li>
            <li className="header-nav__menu-link-item">
              <Link to="nosotros" className="header-nav__menu-link" ref={headerNavMenuLink} onClick={closeMenu}>NOSOTROS </Link>
            </li>
            <li className="header-nav__menu-link-item">
              <Link to="contacto" className="header-nav__menu-link" ref={headerNavMenuLink} onClick={closeMenu}>CONTÁCTENOS</Link>
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
