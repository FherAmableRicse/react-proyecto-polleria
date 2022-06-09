import { useEffect, useState } from "react";

import "../../App.css";
import "../../styles/css/Reservas.css";
import Alert from "../sections/Alert";

const ReservasForm = ({ reserva, submitReservasForm }) => {
  const todayDate = new Date().toISOString().slice(0, 10);

  const [formReserva, setFormReserva] = useState({
    _id: "",
    solicitante: "",
    dni: "",
    fecha: "",
    hora: "",
    motivo: "",
  });

  const [alert, setAlert] = useState({
    message: "",
    error: false,
  });
  const { solicitante, dni, fecha, hora, motivo } = formReserva;

  const handleChange = (e) => {
    setFormReserva({
      ...formReserva,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [
        solicitante.trim(),
        dni.trim(),
        fecha.trim(),
        hora.trim(),
        motivo.trim(),
      ].includes("")
    ) {
      setAlert({
        message: "Todos los campos son obligatorios",
        error: true,
      });
    } else if (!isNaN(solicitante)) {
      setAlert({
        message: "Nombre inválido",
        error: true,
      });
    } else if (dni.trim().length > 8 || dni.trim().length < 8) {
      setAlert({
        message: "DNI inválido",
        error: true,
      });
    } else {
      submitReservasForm(formReserva);
      setFormReserva({
        _id: "",
        solicitante: "",
        dni: "",
        fecha: "",
        hora: "",
        motivo: "",
      });
      setAlert(false);
    }
  };

  useEffect(() => {
    if (reserva._id) {
      const { _id, solicitante, dni, fecha, hora, motivo } = reserva;
      setFormReserva({
        _id,
        solicitante,
        dni,
        fecha,
        hora,
        motivo,
      });
    }
  }, [reserva]);

  return (
    <section className="mb-auto container-reservas-form d-flex flex-column gap-3 col-md-5 animate__animated animate__fadeInLeft">
      <form
        className=" sectionForm text-dark rounded container"
        onSubmit={handleSubmit}
      >
        <h3 className="fw-bold text-center text-danger" id="formTitle">
          🍴 {reserva._id ? "Editar" : "Crear"} Reserva 🍴
        </h3>
        <div
          className="text-dark form-floating mb-3 "
          style={{ display: "none" }}
        >
          <input
            type="number"
            className="form-control"
            name="id"
            placeholder="Id"
            id="formId"
            readOnly
          />
          <label htmlFor="id" className="text-dark">
            Id
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            name="solicitante"
            placeholder="Nombre del Solicitante"
            className="form-control"
            value={solicitante}
            onChange={handleChange}
            required
          />
          <label htmlFor="solicitante" className="text-dark">
            Nombre del Solicitante
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            name="dni"
            placeholder="Documento de Identidad"
            className="form-control"
            value={dni}
            onChange={handleChange}
            required
          />
          <label htmlFor="dni" className="text-dark">
            Documento de Identidad
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            min={todayDate}
            type="date"
            name="fecha"
            placeholder="Fecha de Reserva"
            className="form-control"
            value={fecha}
            onChange={handleChange}
            required
          />
          <label htmlFor="fecha" className="text-dark">
            Fecha de Reserva
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="time"
            name="hora"
            placeholder="Hora de Reserva"
            className="form-control"
            value={hora}
            onChange={handleChange}
            required
          />
          <label htmlFor="hora" className="text-dark">
            Hora de Reserva
          </label>
        </div>
        <select
          className="form-select text-center mb-3"
          value={motivo}
          name="motivo"
          onChange={handleChange}
        >
          <option value="">-- Seleccione motivo --</option>
          <option value="Reunión">Reunión</option>
          <option value="Cumpleaños">Cumpleaños</option>
          <option value="Aniversario">Aniversario</option>
        </select>
        <button type="submit" className="btn btn-dark w-100">
          {reserva._id ? "Editar" : "Crear"}
        </button>
        {alert.error && <Alert alert={alert} />}
      </form>
    </section>
  );
};

export default ReservasForm;
