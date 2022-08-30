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
    mensaje: ""
  });

  const { nombre, apellido, dni, email, celular, mensaje } = formReclamo;

  const handleChange = (e) => {
    setFormReclamo({
      ...formReclamo,
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
      dni.trim() === "" ||
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

    if (dni.length > 8 || dni.length < 8) {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "El documento de identidad no es válido",
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
      dni.trim() !== "" ||
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
      setFormReclamo({
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        celular: "",
        mensaje: ""
      });
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
              name="mensaje"
              value={mensaje}
              onChange={handleChange}
              required
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
