import { useEffect, useState } from "react";
import Error from "../Error";
import '../../App.css'
import '../../styles/css/Reservas.css'
const ReservasForm = ({ reserva, submitReservasForm }) => {

  const [formReserva, setFormReserva] = useState({
    _id: '',
    solicitante: '',
    dni: '',
    fecha: '',
    hora: '',
    motivo: '',
  });

  const [alert, setAlert] = useState(false);

  const { solicitante, dni, fecha, hora, motivo } = formReserva;

  const handleChange = (e) => {
    setFormReserva({
      ...formReserva,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([solicitante.trim(), dni.trim(), fecha.trim(), hora.trim(), motivo.trim(),].includes("")) {
      setAlert(true);
    } else {
      submitReservasForm(formReserva);
      setFormReserva({
        _id: '',
        solicitante: '',
        dni: '',
        fecha: '',
        hora: '',
        motivo: '',
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
        motivo
      });
    }
  }, [reserva]);

  return (
    <section className="mb-auto container-reservas-form d-flex flex-column gap-3 col-md-5">
      <form
        className=" sectionForm text-dark rounded container"
        onSubmit={handleSubmit}
      >
        <h3 className="fw-bolder text-center text-danger" id="formTitle">🍴 {reserva._id ? 'Editar' : 'Crear'} Reserva 🍴</h3>
        <div className="text-dark form-floating mb-3" style={{ display: "none" }}>
          <input
            type="number"
            className="form-control"
            name="id"
            placeholder="Id"
            id="formId"
            readOnly
          />
          <label htmlFor="id" className="text-dark">Id</label>
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
          <label htmlFor="solicitante" className="text-dark">Nombre del Solicitante</label>
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
          <label htmlFor="dni" className="text-dark">Documento de Identidad</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="date"
            name="fecha"
            placeholder="Fecha de Reserva"
            className="form-control"
            value={fecha}
            onChange={handleChange}
            required
          />
          <label htmlFor="fecha" className="text-dark">Fecha de Reserva</label>
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
          <label htmlFor="hora" className="text-dark">Hora de Reserva</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            name="motivo"
            placeholder="Motivo de Reserva"
            className="form-control"
            value={motivo}
            onChange={handleChange}
            required
          />
          <label htmlFor="motivo" className="text-dark">Motivo de Reserva</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          {reserva._id ? 'Editar' : 'Crear'} Reserva
        </button>
        {
          alert && <Error>Todos los campos son obligatorios</Error>
        }
      </form>



    </section>
  );
}

export default ReservasForm;