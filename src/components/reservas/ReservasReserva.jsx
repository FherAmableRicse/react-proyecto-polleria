import Swal from 'sweetalert2';

const ReservasReserva = ({ reserva, readReserva, deleteReserva }) => {
  const { _id, solicitante, dni, fecha, hora, motivo } = reserva;
  const urlWhatsapp = `${process.env.REACT_APP_URL}`;

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger mx-2'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, elimínalo!',
      cancelButtonText: '¡No, cancélalo!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteReserva(id);
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          'La reserva ha sido eliminada.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          '¡Cancelado!',
          'Tu reserva se mantiene :)',
          'error'
        );
      }
    });
  };

  return (
    <li
      className="d-flex flex-column gap-2 list-group-item list-group-item-action animate__animated animate__bounceInUp"
      aria-current="true"
    >
      <div className="d-flex align-items-center justify-content-between">
        <h5 className=" m-0 text-secondary">Solicitante: <span className="text-dark">{solicitante}</span></h5>
        <small className="badge bg-dark rounded-pill p-2">
          📅 {fecha} | 🕖{hora}
        </small>
      </div>
      <h5 className="m-0 text-secondary">Motivo: <span className="text-dark">{motivo}</span></h5>
      <h5 className="m-0 text-secondary">
        Documento de identidad: <span className="text-dark">{dni}</span>
      </h5>
      <div className="mt-3 d-flex align-items-start justify-content-start">
        <div className="d-flex gap-1">
          <a
            href={`${urlWhatsapp} Solicitante: ${solicitante}, DNI: ${dni}, Fecha: ${fecha}, Hora: ${hora}, Motivo: ${motivo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-sm"
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
            onClick={() => handleDelete(_id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </li >
  );
};

export default ReservasReserva;
