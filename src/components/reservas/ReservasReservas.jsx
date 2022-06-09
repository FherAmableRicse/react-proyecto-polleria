import ReservasReserva from "./ReservasReserva";
const ReservasReservas = ({
  reservas,
  setReserva,
  readReserva,
  deleteReserva,
}) => {
  return (
    <section className="d-flex flex-column gap-3 col-md-6 animate__animated animate__fadeInRight">
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
          </>
        )}
      </ul>
    </section>
  );
};

export default ReservasReservas;
