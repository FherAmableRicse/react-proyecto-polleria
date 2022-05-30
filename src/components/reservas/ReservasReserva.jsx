const ReservasReserva = ({ reserva, readReserva, deleteReserva }) => {
  const { _id, solicitante, dni, fecha, hora, motivo } = reserva;
  const urlWhatsapp = `${process.env.REACT_APP_URL}`;
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

          <button
            type="button"
            className="btn btn-warning btn-sm"
            onClick={() => readReserva(_id)}
          >
            Editar
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => deleteReserva(_id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
};

export default ReservasReserva;
