import "../styles/css/Nosotros.css";

const Nosotros = () => {
  return (
    <>
      <article className="about  animate__animated animate__zoomIn">
        <div className="about__message">
          <h3 className="about__message-title">¿Quienes somos?</h3>
          <p className="about__phrase">
            La más grande cadena de pollerías del Perú desde 1991 empezamos muy
            pequeños a servir a nuestros un pollo 100% fresco que va de la
            granja a la mesa. Poco a poco el aroma de nuestro sueño, empezó a
            crecer y a conquistar el paladar de otras tierras. Con la alegría y
            el festejo de Huaylash, llegamos a Lima hace 15 años, manteniendo
            como objetivo concentrar una experiencia culinaria única.Al ser más
            que una pollería, nuestra carta, nos permite brindarle a nuestros
            clientes una variedad de platos tanto en entradas, fondos y postres;
            optando por diferentes opciones para acompañar nuestro gran Pollo.
          </p>
        </div>
        <figure className="about-image-container">
          <img
            className="about-image"
            src="https://i.postimg.cc/KzLc1SxV/Logo-Pollo.png"
            alt="about imagen"
          />
        </figure>
      </article>
    </>
  );
};

export default Nosotros;
