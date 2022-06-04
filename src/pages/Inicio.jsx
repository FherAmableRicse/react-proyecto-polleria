import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/Inicio.css'

const Inicio = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    }
    else if (window.scrollY <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  window.addEventListener('scroll', toggleVisible);

  return (
    <main className="main">
      <div className="main__container" id="inicio" >
        <section className="section">
          <figure className="section__figure-image-container animate__animated animate__fadeIn">
            <img src="https://i.postimg.cc/Dym5bv0v/item1.jpg" alt="Item 1" className="section__figure-image" />
            <img src="https://i.postimg.cc/5yrBmzyx/item2.jpg" alt="Item 2" className="section__figure-image" />
            <img src="https://i.postimg.cc/pTXKbCnW/item3.jpg" alt="Item 3" className="section__figure-image" />
            <img src="https://i.postimg.cc/T369NrQw/item4.jpg" alt="Item 4" className="section__figure-image" />
            <img src="https://i.postimg.cc/rzXrgGNC/item5-1.jpg" alt="Item 5" className="section__figure-image" />
            <img src="https://i.postimg.cc/sfG4VnNx/item6.jpg" alt="Item 6" className="section__figure-image" />
            <img src="https://i.postimg.cc/vZV6kzGn/item7.jpg" alt="Item 7" className="section__figure-image" />
          </figure>
        </section>
        <div className="main__publicity-container">
          <img src="https://i.postimg.cc/YqKgRWDx/pollo-p.png" alt="imagen pollo a la brasa" className="main__publicity-image" />
          <div className="main__publicity-text">
            <h2>El Verdadero Sabor a Leña</h2>
            <p>Solo nosotros tenemos el mejor pollo y la mejor leña, encuéntranos en cualquier distrito de la
              capital.</p>
            <p>¡Te esperamos!</p>
          </div>
          <img src="https://i.postimg.cc/DZRGtJvn/parrilla-p.png" alt="imagen carne parrilla" className="main__publicity-image" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-up-square-fill boton" viewBox="0 0 16 16" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11z" />
        </svg>
      </div>
    </main>
  )
}

export default Inicio;