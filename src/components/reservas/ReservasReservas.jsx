import ReservasReserva from "./ReservasReserva";
const ReservasReservas=({reservas, readReserva})=>{
    return(
        <section className=" d-flex flex-column gap-3 col-md-6">
      <ul className="lista__reservas list-group">
      <h3 className="text-center text-danger">Reservas</h3>
        {reservas.length ? (
          reservas.map((reserva) => {
            return (
              <ReservasReserva
              key={reserva.id}
                reserva={reserva}
                readReserva={readReserva}
              />
            );
          })
        ) : (
          <li
            className="d-flex justify-content-center gap-2 list-group-item"
            aria-current="true"
          >
            <h4 className="fw-bolder m-0">No hay reservas registradas</h4>
          </li>
        )}
      </ul>
    </section>
    );
};

export default ReservasReservas;