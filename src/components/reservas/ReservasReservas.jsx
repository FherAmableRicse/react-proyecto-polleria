import ReservasReserva from "./ReservasReserva";
const ReservasReservas = ({ reservas, readReserva, deleteReserva }) => {
  return (
    <section className="d-flex flex-column gap-3 col-md-6 animate__animated animate__lightSpeedInRight">
      <ul className="list-group">
        <h3 className="fw-bolder text-center text-danger">🍴 Reservas 🍴</h3>
        {reservas.length ? (
          reservas.map((reserva) => {
            return (
              <ReservasReserva
                key={reserva._id}
                reserva={reserva}
                readReserva={readReserva}
                deleteReserva={deleteReserva}
              />
            );
          })
        ) : (
          <>
            <div
              className="d-flex justify-content-center gap-2 list-group-item"
              aria-current="true"
            >
              <h4 className="fw-bolder m-0">No hay reservas registradas</h4>
            </div>
            <li
              className="d-flex flex-column gap-2 list-group-item list-group-item-action"
              aria-current="true"
            >
              <div className="d-flex align-items-center justify-content-between">
                <h5 className=" m-0 text-secondary">Solicitante: <span className="text-dark">?</span></h5>
                <small className="badge bg-dark rounded-pill py-2 px-2">
                  📅 ? | 🕖 ?
                </small>
              </div>
              <h5 className="m-0 text-secondary">Motivo: <span className="text-dark">?</span></h5>
              <h5 className="m-0 text-secondary">
                Documento de identidad: <span className="text-dark">?</span>
              </h5>
              <div className="mt-3 d-flex align-items-start justify-content-start">
                <div className="d-flex gap-1">
                  <button
                    className="fs-6 btn btn-dark btn-sm px-4 py-1 pe-none"
                  >
                    ?
                  </button>
                  <button
                    type="button"
                    className="fs-6 btn btn-warning btn-sm px-4 py-1 pe-none"
                  >
                    ?
                  </button>
                  <button
                    type="button"
                    className="fs-6 btn btn-danger btn-sm px-4 py-1 pe-none"
                  >
                    ?
                  </button>
                </div>
              </div>
            </li >
          </>
        )}
      </ul>
    </section>
  );
};

export default ReservasReservas;