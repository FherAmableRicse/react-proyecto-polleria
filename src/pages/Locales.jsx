import '../styles/css/Locales.css'
import local_lima from "../assets/img/local_lima.jpg"
import local_huancayo from "../assets/img/local_huancayo.jpg"
const Locales = () => {
  return (
    <>
      <article className="locales-article  animate__animated animate__zoomIn">
        <div className="locales__info">
          <h3 className="locales-title">
            Nuestros Locales
          </h3>
          <div className="locales-parrafo">
          En Pollería Pollo PICOM tenemos la misión de brindar al público un servicio de calidad, ofreciendo un buen producto y también dando una excelente atención en nuestros locales acorde con las expectativas de nuestros clientes; modernos y acogedores. Constituyéndonos así en una fuente de trabajo atractiva que ayude al sustento de las familia peruana.<br/><br/>

          Actualmente contamos con 2 locales a su disposición:<br/><br/>
            <ul>
              <li>
              Lima: Av. Simón Bolivar Nro. 987 - Pueblo Libre<br/>
              Telf: (01) 500 2550
              </li>
              <br/>
              <li>
              Huancayo: Jr. Ancash 391<br/>
              Telf: (064) 211445
              </li>
            </ul>
          </div>
        </div>
        <figure className="locales-imagenes__container">
          <img className="imagenes" src={local_lima} alt="local lima" />
          <img className="imagenes" src={local_huancayo} alt="local huancayo" />
        </figure>
      </article>
    </>
  )
}

export default Locales;