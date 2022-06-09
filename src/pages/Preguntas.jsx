import "../styles/css/Preguntas.css";
const Preguntas = () => {
  return (
    <>
      <article className="preguntas-article animate__animated animate__zoomIn">
        <h2 className="preguntas-title">PREGUNTAS FRECUENTES</h2>
        <div className="preguntas__container">
          <div className="preguntas">
            <h3 className="title-parrafos">
              ¿Cuál es el horario de atención en los locales de Pollo PICOM?
            </h3>
            <p className="parrafos">
              Lima: Lunes a Viernes de 12 pm a 11 pm - Sábados y Domingos: 12
              pm. a 10 pm.
              <br />
              Huancayo: Lunes a Domingos de 12 pm a 11 pm.
            </p>

            <h3 className="title-parrafos">
              ¿Cómo puedo obtener mi recibo o factura electrónica?
            </h3>
            <p className="parrafos">
              Para solicitar un recibo o factura electrónica el cliente deberá
              comunicarse al (01)5002550 o enviar un correo a
              pollopicon@gmail.com indicando los siguientes datos: Local, Fecha
              de emisión, Número de Boleta/Factura, Monto, Razón Social (Para
              factura), RUC (Para factura) y adicionalmente, indicar datos de
              contacto para el envío (Nombre completo, teléfono y correo
              electrónico).
            </p>
            <h3 className="title-parrafos">
              ¿Puedo agregar más comensales luego de generada mi reserva en la
              página web?
            </h3>
            <p className="parrafos">
              Luego de registrada los datos en la pestaña de reservas ya no
              puede haber modificación dentro de la plataforma, pero el cliente
              podrá comunicarse a nuestra central de atención al cliente (01)500
              2550 o (064) 211445 y agregar más comensales a su reserva con un
              máximo de 2 horas de anticipación previa disponibilidad del local.
            </p>
            <h3 className="title-parrafos">
              ¿Puedo hacer cambios en los pedidos?
            </h3>
            <p className="parrafos">
              El cliente no podrá añadir más productos o realizar cambios a su
              pedido luego de enviada la información. Si desea adquirir un
              producto adicional será generado como una nueva compra y deberá
              cumplir con las condiciones indicadas en las Políticas de
              Delivery.
            </p>
          </div>
          <figure className="imagen-container">
            <img
              className="imagen"
              src="https://i.postimg.cc/T3gpnHD5/preguntas.png"
              alt="imagen preguntas"
            />
          </figure>
        </div>
      </article>
    </>
  );
};

export default Preguntas;
