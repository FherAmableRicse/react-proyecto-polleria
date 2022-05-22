const ReservasForm = () => {
  return ( 
    <section className=" d-flex flex-column gap-3 col-md-4">
      <h3 className="text-center" id="formTitle">🐱Crear</h3>
      <form
        className=" sectionForm text-dark rounded"
        // onSubmit={handleSubmit}
      >
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
            name="mascota"
            placeholder="Nombre de la Mascota"
            className="form-control"
            // value={mascota}
            // onChange={handleChange}
            required
          />
          <label htmlFor="mascota" className="text-dark">Nombre del Solicitante</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            name="propietario"
            placeholder="Nombre del propietario"
            className="form-control"
            // value={propietario}
            // onChange={handleChange}
            required
          />
          <label htmlFor="propietario" className="text-dark">Documento de Identidad</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="date"
            name="fecha"
            placeholder="Fecha"
            className="form-control"
            // value={fecha}
            // onChange={handleChange}
            required
          />
          <label htmlFor="fecha" className="text-dark">Fecha de Reserva</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="time"
            name="hora"
            placeholder="Hora"
            className="form-control"
            // value={hora}
            // onChange={handleChange}
            required
          />
          <label htmlFor="hora" className="text-dark">Hora de Reserva</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            name="sintomas"
            placeholder="Síntomas"
            className="form-control"
            // value={sintomas}
            // onChange={handleChange}
            required
          />
          <label htmlFor="sintomas" className="text-dark">Motivo de Reserva</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
        >
        Reservar
        </button>
      </form>
      {
      <div className="align-self-center badge bg-warning text-dark">Todos los campos son obligatorios</div>
      }
    </section>
   );
}
 
export default ReservasForm;