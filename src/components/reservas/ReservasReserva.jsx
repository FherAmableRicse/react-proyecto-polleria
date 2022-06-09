import Swal from "sweetalert2";

const ReservasReserva = ({ reserva, readReserva, deleteReserva }) => {
  const { _id, solicitante, dni, fecha, hora, motivo } = reserva;
  const urlWhatsapp = `${process.env.REACT_APP_URL}`;

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-dark mx-2",
        cancelButton: "btn btn-danger mx-2",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¿Estás segur@?",
        text: "No podrás revertir esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "¡Sí, elimínalo!",
        cancelButtonText: "¡No, cancélalo!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteReserva(id);
          swalWithBootstrapButtons.fire(
            "¡Eliminado!",
            "La reserva ha sido eliminada.",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "¡Cancelado!",
            "Tu reserva se mantiene :)",
            "error"
          );
        }
      });
  };
  const handleConfirm = (
    urlWhatsapp,
    solicitante,
    dni,
    fecha,
    hora,
    motivo,
    id
  ) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-dark mx-2",
        cancelButton: "btn btn-danger mx-2",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "<strong>Por favor confirma tu reserva!</strong>",
        icon: "question",
        reverseButtons: true,
        showCancelButton: true,
        focusConfirm: false,
        cancelButtonText: "¡No, cancélalo!",
        confirmButtonText: `<a class="text-light text-decoration-none" href='${urlWhatsapp} Solicitante: ${solicitante}, DNI: ${dni}, Fecha: ${fecha}, Hora: ${hora}, Motivo: ${motivo}'
      target="_blank" rel="noopener noreferrer">¡Sí, confírmalo!</a>`,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteReserva(id);
          swalWithBootstrapButtons.fire(
            "¡Confirmada!",
            "La reserva ha sido confirmada",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "¡Cancelado!",
            "Tu reserva se mantiene :)",
            "error"
          );
        }
      });
  };
  return (
    <li
      className="mt-2 d-flex flex-column gap-2 rounded-3 list-group-item list-group-item-action animate__animated animate__bounceInUp"
      aria-current="true"
    >
      <div className="d-flex align-items-center justify-content-between">
        <h5 className=" m-0 text-secondary">
          Solicitante: <span className="text-dark">{solicitante}</span>
        </h5>
        <small className="badge bg-dark rounded-pill p-2">
          📅 {fecha} | 🕖{hora}
        </small>
      </div>
      <h5 className="m-0 text-secondary">
        Motivo: <span className="text-dark">{motivo}</span>
      </h5>
      <h5 className="m-0 text-secondary">
        Documento de identidad: <span className="text-dark">{dni}</span>
      </h5>
      <div className="mt-3 d-flex align-items-start justify-content-start">
        <div className="d-flex gap-1">
          <div className="contact-whatsapp">
            <button
              onClick={() =>
                handleConfirm(
                  urlWhatsapp,
                  solicitante,
                  dni,
                  fecha,
                  hora,
                  motivo,
                  _id
                )
              }
              className="fs-6 btn btn-sm text-white"
            >
              Confirmar
            </button>
            <img
              className="contact-whatsapp-img"
              src="https://i.postimg.cc/t407ckP2/wsppng.png"
              alt="whatsapp icon"
            />
          </div>
          <button
            type="button"
            className="fs-6 btn btn-warning btn-sm"
            onClick={() => readReserva(_id)}
          >
            Editar
          </button>
          <button
            type="button"
            className="fs-6 btn btn-danger btn-sm"
            onClick={() => handleDelete(_id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
};

export default ReservasReserva;
