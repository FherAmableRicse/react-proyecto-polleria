import { Link } from 'react-router-dom';
import '../styles/css/Inicio.css'

const Inicio = () => {
  return (
    <main className="main">
      <div className="main__container" id="inicio">
        <div className="menu__container">
          <Link to="/" className="menu__link"><img src="https://i.postimg.cc/W3drW6P5/menu-promociones.png" alt="imagen promocion"
            className="menu__image" /><span className="menu__text">PROMOCIONES</span></Link>
          <Link to="/" className="menu__link"><img src="https://i.postimg.cc/Zn3NZbn3/menu-pollo.jpg" alt="imagen pollo"
            className="menu__image" /><span className="menu__text">POLLO</span></Link>
          <Link to="/" className="menu__link"><img src="https://i.postimg.cc/qB9cFYqy/menu-piqueos.jpg" alt="imagen piqueos"
            className="menu__image" /><span className="menu__text">PIQUEOS</span></Link>
          <Link to="/" className="menu__link"><img src="https://i.postimg.cc/s2D5SCHd/menu-parrilla.jpg" alt="imagen parrillas"
            className="menu__image" /><span className="menu__text">PARRILLLAS</span></Link>
          <Link to="/" className="menu__link"><img src="https://i.postimg.cc/pTSrpg4Z/menu-guarniciones.jpg" alt="imagen guarniciones"
            className="menu__image" /><span className="menu__text">GUARDICIONES</span></Link>
          <Link to="/" className="menu__link"><img src="https://i.postimg.cc/3wndHyZz/menu-ensalada.jpg" alt="imagen ensalada"
            className="menu__image" /><span className="menu__text">ENSALADAS</span></Link>
          <Link to="/" className="menu__link"><img src="https://i.postimg.cc/2yB6v0ff/menu-bebidas.jpg" alt="imagen bebidas"
            className="menu__image" /><span className="menu__text">BEBIDAS</span></Link>
        </div>
      </div>

      <section className="section">
        <figure className="section__figure-image-container">
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
          <p>Solo nosotros tenemos el mejor pollo y la mejor leña, encuentranos en cualquier distrito de la
            capital.</p>
          <p>¡Te esperamos!</p>
        </div>
        <img src="https://i.postimg.cc/DZRGtJvn/parrilla-p.png" alt="imagen carne parrilla" className="main__publicity-image" />
      </div>
    </main>
  )
}

export default Inicio;