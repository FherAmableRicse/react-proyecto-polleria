import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/css/Inicio.css";

const Inicio = () => {
  const [visible, setVisible] = useState(false);

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

  return (
    <main className="main">
      <section className="main__carrousel">
        <div
          id="carouselExampleDark"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <img
                src="https://i.postimg.cc/Jh6Z5YSy/Pachamanquero.jpg"
                className="d-block w-100"
                alt="Foto Conformación Empresa"
              />
              <div className="carousel-caption d-none d-md-block p-2 text-light bg-opacity-25">
                <button
                  type="button"
                  className="btn btn-danger mb-4 rounded-pill py-2 px-4"
                >
                  <Link
                    to="pedidos"
                    className="btn-carousel text-decoration-none"
                  >
                    EMPIEZA TU PEDIDO AQUI
                  </Link>
                </button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img
                src="https://i.postimg.cc/L4qpC5QC/lalena-perfectos-compartir.jpg"
                className="d-block w-100"
                alt="Foto desfile Aniversario"
              />
              <div className="carousel-caption d-none d-md-block p-2 text-light bg-opacity-25">
                <button
                  type="button"
                  className="btn btn-danger mb-4 rounded-pill py-2 px-4"
                >
                  <Link
                    to="pedidos"
                    className="btn-carousel text-decoration-none"
                  >
                    EMPIEZA TU PEDIDO AQUI
                  </Link>
                </button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img
                src="https://i.postimg.cc/7LCx2tkY/lalena-picaditos-banner.jpg"
                className="d-block w-100"
                alt="Foto grupo de Delivery"
              />
              <div className="carousel-caption d-none d-md-block p-2 text-light bg-opacity-25">
                <button
                  type="button"
                  className="btn btn-danger mb-4 rounded-pill py-2 px-4"
                >
                  <Link
                    to="pedidos"
                    className="btn-carousel text-decoration-none"
                  >
                    EMPIEZA TU PEDIDO AQUI
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <div className="main__container" id="inicio">
        <section className="section">
          <figure className="section__figure-image-container animate__animated animate__fadeIn">
            <Link
              className="section__figure-image-link"
              to="pedidos"
              onClick={scrollToTop}
            >
              <img
                src="https://i.postimg.cc/Dym5bv0v/item1.jpg"
                className="section__figure-image"
                alt="Item 1"
              />
            </Link>
            <Link
              className="section__figure-image-link"
              to="pedidos"
              onClick={scrollToTop}
            >
              <img
                src="https://i.postimg.cc/5yrBmzyx/item2.jpg"
                className="section__figure-image"
                alt="Item 2"
              />
            </Link>
            <Link
              className="section__figure-image-link"
              to="pedidos"
              onClick={scrollToTop}
            >
              <img
                src="https://i.postimg.cc/pTXKbCnW/item3.jpg"
                className="section__figure-image"
                alt="Item 3"
              />
            </Link>
            <Link
              className="section__figure-image-link"
              to="pedidos"
              onClick={scrollToTop}
            >
              <img
                src="https://i.postimg.cc/T369NrQw/item4.jpg"
                className="section__figure-image"
                alt="Item 4"
              />
            </Link>
            <Link
              className="section__figure-image-link"
              to="pedidos"
              onClick={scrollToTop}
            >
              <img
                src="https://i.postimg.cc/rzXrgGNC/item5-1.jpg"
                className="section__figure-image"
                alt="Item 5"
              />
            </Link>
            <Link
              className="section__figure-image-link"
              to="pedidos"
              onClick={scrollToTop}
            >
              <img
                src="https://i.postimg.cc/J0smvVHh/item6.jpg"
                className="section__figure-image"
                alt="Item 6"
              />
            </Link>
            <Link
              className="section__figure-image-link"
              to="pedidos"
              onClick={scrollToTop}
            >
              <img
                src="https://i.postimg.cc/vZV6kzGn/item7.jpg"
                className="section__figure-image"
                alt="Item 7"
              />
            </Link>
          </figure>
        </section>
        <div className="main__publicity-container">
          <img
            src="https://i.postimg.cc/YqKgRWDx/pollo-p.png"
            alt="imagen pollo a la brasa"
            className="main__publicity-image"
          />
          <div className="main__publicity-text">
            <h2>El Verdadero Sabor a Leña</h2>
            <p>
              Solo nosotros tenemos el mejor pollo y la mejor leña, encuéntranos
              en cualquier distrito de la capital.
            </p>
            <p>¡Te esperamos!</p>
          </div>
          <img
            src="https://i.postimg.cc/DZRGtJvn/parrilla-p.png"
            alt="imagen carne parrilla"
            className="main__publicity-image"
          />
        </div>
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
      </div>
    </main>
  );
};

export default Inicio;
