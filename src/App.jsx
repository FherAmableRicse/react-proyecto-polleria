import { useState } from 'react';
import './App.css';
import ReservasForm from './components/reservas/ReservasForm';
import ReservasReservas from './components/reservas/ReservasReservas';
import Header from './components/sections/Header';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [reservas,setReservas]=useState([]);
  const [reserva,setReserva]=useState({});

  const createReserva = (reserva) => {
    reserva.id = uuidv4();
    setReservas([...reservas, reserva]);
  };

  const readReserva = (id) => {
    const reserva = reservas.find((element) => {
      return element.id === id;
    });
    setReserva(reserva);
  };

  const submitReserva=(reserva)=>{
    if(reserva.id){
      console.log('editar');
    }else{
      createReserva(reserva);
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="container-reservas container">
          <div className="container-reservas__reserva">
            <ReservasForm
              submitReserva={submitReserva}
            />
            <ReservasReservas
              reservas={reservas}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;