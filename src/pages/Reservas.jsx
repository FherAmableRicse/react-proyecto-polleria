import { useEffect, useState } from 'react';
import ReservasForm from '../components/reservas/ReservasForm';
import ReservasReservas from '../components/reservas/ReservasReservas';
import { v4 as uuidv4 } from 'uuid';

const Reservas = () => {

  let localStorageReservas = JSON.parse(localStorage.getItem('reservasData')) ?? [];

  const [reserva, setReserva] = useState({});
  const [reservas, setReservas] = useState(localStorageReservas);

  const createReserva = (reserva) => {
    reserva._id = uuidv4();
    setReservas([...reservas, reserva]);
  };

  const readReserva = (id) => {
    const reserva = reservas.find((element) => {
      return element._id === id;
    });
    setReserva(reserva);
  };
  const updateReserva = (reserva) => {
    const updatedReservas = reservas.map((element) => {
      return reserva._id === element._id ? reserva : element;
    });
    setReservas(updatedReservas);
    setReserva({});

  };

  const deleteReserva = (id) => {
    setReservas(reservas.filter((element) => {
      return element._id !== id;
    }));
    setReserva({});
  };

  const submitReservasForm = (reserva) => {
    if (reserva._id === '') {
      createReserva(reserva);
    } else {
      updateReserva(reserva)

    }
  };

  useEffect(() => {
    localStorage.setItem('reservasData', JSON.stringify(reservas));
  }, [reservas]);

  return (
    <main>
      <section className="container-reservas container">
        <div className="container-reservas__reserva">
          <ReservasForm
            submitReservasForm={submitReservasForm}
            reserva={reserva}
          />
          <ReservasReservas
            reservas={reservas}
            readReserva={readReserva}
            deleteReserva={deleteReserva}
          />
        </div>
      </section>
    </main>
  )
}

export default Reservas