import ReservasReserva from "./ReservasReserva";
const ReservasReservas=({reservas, readReserva})=>{
    return(
        <section className="d-flex flex-column gap-3 col-md-6">
      <h3 className="text-center">Citas</h3>
      <ul className="list-group">
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
            <h4 className="fw-bolder m-0">No hay citas registradas</h4>
          </li>
        )}
      </ul>
    </section>
    );
};

export default ReservasReservas;