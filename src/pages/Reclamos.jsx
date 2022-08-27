import "../../src/styles/css/Reclamos.css";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";

const Reclamos = () => {

  const urlReclamos= "http://localhost:5000/reclamo/confirmed";
  const [formReclamo, setFormReclamo] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    correo: "",
    celular: "",
    dataReclamo:""
  });

  let errorForm = false;

  const { nombre, apellido, dni, correo, celular,dataReclamo } = formReclamo;

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
        correo.trim(),
        celular.trim(),
        dataReclamo.trim()
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
        axios.post(urlReclamos,{nombre, apellido, dni,correo, celular,dataReclamo})
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
      setFormReclamo({
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        celular: "",
        dataReclamo:""

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
              name="correo"
              value={correo}
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
              type="text"
              className="reclamos__form-item reclamos__form-item--area"
              name="dataReclamo"
              value={dataReclamo}
              onChange={handleChange}
              placeholder="Escribe tu reclamo aquí"
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
