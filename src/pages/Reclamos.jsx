import "../../src/styles/css/Reclamos.css";
import Swal from "sweetalert2";
import { useState } from "react";

const Reclamos = () => {
  const [formReclamo, setFormReclamo] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    celular: "",
  });

  let errorForm = false;

  const { nombre, apellido, dni, email, celular } = formReclamo;

  const handleChange = (e) => {
    setFormReclamo({
      ...formReclamo,
      [e.target.name]: e.target.value,
    });
  };

  const enviar = (e) => {
    e.preventDefault();

    let message = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      [
        nombre.trim(),
        apellido.trim(),
        dni.trim(),
        email.trim(),
        celular.trim(),
      ].includes("")
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

    if (dni.length > 8 || dni.length < 8) {
      message += `El documento de identidad no es válido <br> `;
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
      setFormReclamo({
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        celular: "",
      });
      errorForm = false;
    }
  };

  return (
    <section
      className="reclamos animate__animated animate__backInLeft"
      id="reclamos"
    >
      <div className="reclamos__container">
        <h2 className="reclamos__title">RECLAMOS</h2>
        <form
          action=""
          id="formReclamos"
          className="reclamos__form"
          onSubmit={enviar}
        >
          <div className="reclamos__form-inputs">
            <input
              id="name"
              className="reclamos__form-item"
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={nombre}
              onChange={handleChange}
              required
            />
            <input
              id="apellido"
              className="reclamos__form-item"
              type="text"
              placeholder="Apellido"
              name="apellido"
              value={apellido}
              onChange={handleChange}
              required
            />
            <input
              id="dni"
              className="reclamos__form-item"
              type="number"
              placeholder="DNI / C.E"
              name="dni"
              value={dni}
              onChange={handleChange}
              required
            />
            <input
              id="email"
              className="reclamos__form-item"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              id="celular"
              className="reclamos__form-item"
              type="number"
              placeholder="Celular"
              name="celular"
              value={celular}
              onChange={handleChange}
              required
            />
            <textarea
              id="area"
              className="reclamos__form-item reclamos__form-item--area"
              placeholder="Escribe tu reclamo aquí"
            ></textarea>
            <div className="reclamos__form-button-container">
              <button type="submit" className="reclamos__form-button">
                Enviar
              </button>
            </div>
          </div>
          <figure className="reclamos__form-image-container">
            <img
              className="reclamos__form-image"
              src="https://i.postimg.cc/FKv1pgyW/reclamos.png"
              alt="Logo Reclamo"
            />
          </figure>
        </form>
      </div>
    </section>
  );
};
export default Reclamos;
