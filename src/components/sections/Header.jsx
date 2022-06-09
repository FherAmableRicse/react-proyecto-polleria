import "../../styles/css/Header.css";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const headerNavMenuLinkList = useRef();

  const headerNavMenuLinkInicio = useRef();
  const headerNavMenuLinkPedido = useRef();
  const headerNavMenuLinkReserva = useRef();
  const headerNavMenuLinkNosotros = useRef();
  const headerNavMenuLinkContacto = useRef();

  const headerNavThemeIconContainer = useRef();
  const header = useRef();
  const headerNav = useRef();
  const sampleLocation = useLocation();

  const documentScroll = () => {
    header.current?.classList.toggle("header--scroll", window.scrollY > 0);
    headerNav.current?.classList.toggle(
      "header-nav--scroll",
      window.scrollY > 0
    );
  };

  useEffect(() => {
    switch (sampleLocation.pathname) {
      case "/":
        document
          .querySelector(".header-nav__menu-link--active")
          ?.classList.remove("header-nav__menu-link--active");
        headerNavMenuLinkInicio.current.classList.add(
          "header-nav__menu-link--active"
        );
        break;

      case "/pedidos":
        document
          .querySelector(".header-nav__menu-link--active")
          ?.classList.remove("header-nav__menu-link--active");
        headerNavMenuLinkPedido.current.classList.add(
          "header-nav__menu-link--active"
        );
        break;
      case "/reservas":
        document
          .querySelector(".header-nav__menu-link--active")
          ?.classList.remove("header-nav__menu-link--active");
        headerNavMenuLinkReserva.current.classList.add(
          "header-nav__menu-link--active"
        );
        break;
      case "/nosotros":
        document
          .querySelector(".header-nav__menu-link--active")
          ?.classList.remove("header-nav__menu-link--active");
        headerNavMenuLinkNosotros.current.classList.add(
          "header-nav__menu-link--active"
        );
        break;
      case "/contacto":
        document
          .querySelector(".header-nav__menu-link--active")
          ?.classList.remove("header-nav__menu-link--active");
        headerNavMenuLinkContacto.current.classList.add(
          "header-nav__menu-link--active"
        );
        break;

      default:
        document
          .querySelector(".header-nav__menu-link--active")
          ?.classList.remove("header-nav__menu-link--active");
        break;
    }
  });

  window.addEventListener("scroll", documentScroll);
  const toggleTheme = () => {
    const body = document.querySelector(".body");
    body.classList.toggle("body--light");
    headerNavThemeIconContainer.current.classList.toggle(
      "header-nav__theme-icon-container--active"
    );

    if (body.classList.contains("body--light")) {
      localStorage.setItem("darkMode", false);
    } else {
      localStorage.setItem("darkMode", true);
    }
  };
  const openMenu = () => {
    headerNavMenuLinkList.current.classList.add(
      "header-nav__menu-link-list--open"
    );
  };

  const closeMenu = () => {
    headerNavMenuLinkList.current.classList.remove(
      "header-nav__menu-link-list--open"
    );
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    if (
      localStorage.getItem("darkMode") === "true" ||
      localStorage.getItem("darkMode") === null
    ) {
      document.querySelector(".body").classList.remove("body--light");
      headerNavThemeIconContainer.current.classList.remove(
        "header-nav__theme-icon-container--active"
      );
    } else {
      document.querySelector(".body").classList.add("body--light");
      headerNavThemeIconContainer.current.classList.add(
        "header-nav__theme-icon-container--active"
      );
    }
  }, []);

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
          {/* <Link to="" className="header-nav__register-link">
            👩‍🍳 Ingresar/Registrarse
          </Link> */}
        </div>
        <div className="header-nav__container">
          <Link to="" className="header-nav__link-logo-container">
            <img
              src="https://i.postimg.cc/pLgmgMDd/logo.png"
              alt="Logo Pollería PICOM"
              className="header-nav__link-logo"
            />
          </Link>
          <div className="header-nav__theme-menu-container">
            <button
              className="header-nav__theme-icon-container"
              ref={headerNavThemeIconContainer}
              onClick={toggleTheme}
            >
              <span className="header-nav__theme-icon">🌚</span>
              <span className="header-nav__theme-icon">🌞</span>
            </button>
            <button
              className="header-nav__menu-icon-container"
              onClick={openMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                className="header-nav__menu-icon"
              >
                <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
              </svg>
            </button>
            <ul
              className="header-nav__menu-link-list"
              ref={headerNavMenuLinkList}
            >
              <li className="header-nav__menu-link-item">
                <Link
                  to=""
                  className="header-nav__menu-link"
                  ref={headerNavMenuLinkInicio}
                  onClick={closeMenu}
                >
                  INICIO
                </Link>
              </li>
              <li className="header-nav__menu-link-item">
                <Link
                  to="pedidos"
                  className="header-nav__menu-link"
                  ref={headerNavMenuLinkPedido}
                  onClick={closeMenu}
                >
                  EMPIEZA TU PEDIDO
                </Link>
              </li>
              <li className="header-nav__menu-link-item">
                <Link
                  to="reservas"
                  className="header-nav__menu-link"
                  ref={headerNavMenuLinkReserva}
                  onClick={closeMenu}
                >
                  RESERVAS
                </Link>
              </li>
              <li className="header-nav__menu-link-item">
                <Link
                  to="nosotros"
                  className="header-nav__menu-link"
                  ref={headerNavMenuLinkNosotros}
                  onClick={closeMenu}
                >
                  NOSOTROS{" "}
                </Link>
              </li>
              <li className="header-nav__menu-link-item">
                <Link
                  to="contacto"
                  className="header-nav__menu-link"
                  ref={headerNavMenuLinkContacto}
                  onClick={closeMenu}
                >
                  CONTÁCTENOS
                </Link>
              </li>
              <li
                className="header-nav__menu-link-item header-nav__menu-close-icon-container"
                onClick={closeMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  className="header-nav__menu-close-icon"
                >
                  <path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path>
                  <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
