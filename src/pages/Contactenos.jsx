import "../../src/styles/css/Contactenos.css";
import Swal from "sweetalert2";
import { useState } from "react";

const Contactenos = () => {
  const [formContactenos, setFormContactenos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    celular: "",
    mensaje: ""
  });

  const { nombre, apellido, email, celular, mensaje } = formContactenos;

  const handleChange = (e) => {
    setFormContactenos({
      ...formContactenos,
      [e.target.name]: e.target.value,
    });
  };

  const enviar = (e) => {
    e.preventDefault();

    //eslint-disable-next-line
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      email.trim() === "" ||
      celular.trim() === "" ||
      mensaje.trim() === ""
    ) {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Llenar todos los campos",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (nombre.length < 4) {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Nombre no valido",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (apellido.length < 4) {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Apellido no valido",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!reg.test(email)) {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Correo no valido",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (celular.length > 9 || celular.length < 9) {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "El celular no es válido",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (
      nombre.trim() !== "" ||
      apellido.trim() !== "" ||
      email.trim() !== "" ||
      celular.trim() !== "" ||
      mensaje.trim() !== ""
    ) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Se enviaron los datos",
        showConfirmButton: false,
        timer: 1500,
      });
      setFormContactenos({
        nombre: "",
        apellido: "",
        email: "",
        celular: "",
        mensaje: ""
      });
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
              name="mensaje"
              value={mensaje}
              onChange={handleChange}
              required
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
