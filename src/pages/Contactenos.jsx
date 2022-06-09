import "../../src/styles/css/Contactenos.css";
import Swal from "sweetalert2";
import { useState } from "react";

const Contactenos = () => {
  const [formContactenos, setFormContactenos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    celular: "",
  });

  let errorForm = false;
  const { nombre, apellido, email, celular } = formContactenos;

  const handleChange = (e) => {
    setFormContactenos({
      ...formContactenos,
      [e.target.name]: e.target.value,
    });
  };

  const enviar = (e) => {
    e.preventDefault();
    let message = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      [nombre.trim(), apellido.trim(), email.trim(), celular.trim()].includes(
        ""
      )
    ) {
      errorForm = true;
    }
    if (nombre.length < 4) {
      message += `El nombre no es válido <br> `;
      errorForm = true;

      Swal.fire({
        icon: "error",
        html: message,
        width: "45%",
      });
    }

    if (apellido.length < 4) {
      message += `El apellido no es válido <br> `;
      errorForm = true;
      Swal.fire({
        icon: "error",
        html: message,
        width: "45%",
      });
    }

    if (!regexEmail.test(email)) {
      message += `El email no es válido <br> `;
      errorForm = true;

      Swal.fire({
        icon: "error",
        html: message,
        width: "45%",
      });
    }

    if (celular.length > 9 || celular.length < 9) {
      message += `El celular no es válido <br> `;
      errorForm = true;
      Swal.fire({
        icon: "error",
        html: message,
        width: "45%",
      });
    }
    if (errorForm === false) {
      Swal.fire({
        icon: "success",
        title: "Tus datos han sido enviados",
        showConfirmButton: false,
        timer: 2500,
        width: "45%",
      });
      setFormContactenos({
        nombre: "",
        apellido: "",
        email: "",
        celular: "",
      });
      errorForm = false;
    }
  };
  return (
    <section
      className="contact animate__animated animate__backInLeft"
      id="contact"
    >
      <div className="contact__container">
        <h2 className="contact__title">CONTÁCTENOS</h2>
        <form
          action=""
          id="formContactenos"
          className="contact__form"
          onSubmit={enviar}
        >
          <div className="contact__form-inputs">
            <input
              id="name"
              className="contact__form-item"
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={nombre}
              onChange={handleChange}
              required
            />
            <input
              id="apellido"
              className="contact__form-item"
              type="text"
              placeholder="Apellido"
              name="apellido"
              value={apellido}
              onChange={handleChange}
              required
            />
            <input
              id="email"
              className="contact__form-item"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              id="celular"
              className="contact__form-item"
              type="number"
              placeholder="Celular"
              name="celular"
              value={celular}
              onChange={handleChange}
              required
            />
            <textarea
              id="area"
              className="contact__form-item contact__form-item--area"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
            <div className="contact__form-button-container">
              <button type="submit" className="contact__form-button">
                Enviar
              </button>
            </div>
          </div>
          <figure className="contact__form-image-container">
            <img
              className="contact__form-image"
              src="https://i.postimg.cc/635qJW1C/Pollo-Picom-Contactenos.png"
              alt="Logo Contactenos"
            />
          </figure>
        </form>
      </div>
    </section>
  );
};
export default Contactenos;
