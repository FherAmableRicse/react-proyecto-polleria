const ReservasReserva = ({ reserva }) => {
  const { id, solicitante, dni, fecha, hora, motivo } = reserva;
  const urlWhatsapp = `https://wa.me/51999122789?text=${process.env.REACT_APP_URL}`;
  return (
    <li
      className="d-flex flex-column gap-2 list-group-item list-group-item-action"
      aria-current="true"
    >
      <div className="d-flex align-items-center justify-content-between">
        <h5 className=" m-0 text-info">Solicitante: <span className="text-dark">{solicitante}</span></h5>
        <small className="badge bg-primary rounded-pill">
          {fecha} {hora}
        </small>
      </div>
      <h5 className="m-0 text-info">Motivo: <span className="text-dark">{motivo}</span></h5>
      <h5 className="m-0 text-info">
        Documento de identidad: <span className="text-dark">{dni}</span>
      </h5>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex gap-1">
          <a
            href={`${urlWhatsapp} Solicitante: ${solicitante}, DNI: ${dni}, Fecha: ${fecha}, Hora: ${hora}, Motivo: ${motivo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-sm"
          >
            Confirmar
          </a>
        </div>
      </div>
    </li>
  );
};

export default ReservasReserva;
