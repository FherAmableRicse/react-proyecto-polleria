import "../../src/styles/css/Contactenos.css";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";

const Contactenos = () => {

  const urlContactenos= "http://localhost:5000/contacto/confirmed";
  const [formContactenos, setFormContactenos] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    celular: "",
    dataContacto:""
  });

  let errorForm = false;
  const { nombre, apellido, correo, celular,dataContacto } = formContactenos;

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
      [nombre.trim(), apellido.trim(), correo.trim(), celular.trim(),dataContacto.trim()].includes(
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

    if (!regexEmail.test(correo)) {
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
      try{ 
         axios.post(urlContactenos,{nombre, apellido, correo, celular,dataContacto})
        .then(response=>
          Swal.fire({
              position: 'top',
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
          })
         )
      }catch(error){
        console.log(error)
      }
      setFormContactenos({
        nombre: "",
        apellido: "",
        correo: "",
        celular: "",
        dataContacto:""
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
              name="correo"
              value={correo}
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
              type="text"
              className="contact__form-item contact__form-item--area"
              name="dataContacto"
              value={dataContacto}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí"
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
