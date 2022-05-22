const ReservasReserva = ({ reserva, readReserva }) => {
  const { id, solicitante, dni, fecha, hora, motivo } = reserva;
  const urlWhatsapp = "https://wa.me/51999122789?text=Confirmo%20mi%20cita:";
  return (
    <li
      className="d-flex flex-column gap-2 list-group-item list-group-item-action"
      aria-current="true"
    >
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="fs-5">Solicitante: {solicitante}</h5>
        <small className="badge bg-primary rounded-pill">
          {fecha} {hora}
        </small>
      </div>
      <p className="m-0">motivo: {motivo}</p>
      <h6 className="m-0">
        <span className="fw-folder">Documento de identidad:</span>
        {dni}
      </h6>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex gap-1">
          <a
            href={`${urlWhatsapp} Solicitante: ${solicitante}, DNI: ${dni}, Fecha: ${fecha}, Hora: ${hora}, Motivo: ${motivo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Confirmar
          </a>
        </div>
      </div>
    </li>
  );
};

export default ReservasReserva;
