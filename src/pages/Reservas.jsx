import { useEffect, useState } from "react";
//import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { showToast } from "../utils/sweetalert";
import ReservasForm from "../components/reservas/ReservasForm";
import ReservasReservas from "../components/reservas/ReservasReservas";
const Reservas = () => {
  let localStorageReservas =
    JSON.parse(localStorage.getItem("reservasData")) ?? [];

  const [reserva, setReserva] = useState({});
  const [reservas, setReservas] = useState(localStorageReservas);

  const createReserva = async(reserva) => {
    
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: reserva,
        url: `http://localhost:5000/reserva`
      };
      const { data } = await axios(options);
      console.log(data)
      setReservas([...reservas, data.content]);
      showToast("success", "Reserva Creada");
    } catch (error) {
      console.log(error)
    } 
  
  };
  
  const readReservas =  async() =>{
    try {
      const options = {
        method: 'GET',
        url: 'http://localhost:5000/reserva'
      };
      const { data } = await axios(options);
     setReservas(data.content);
    } catch (error) {
      console.log(error);
    }
  }

  const readReserva = async(_id) => {
    try {
     
      const options = {
        method: 'GET',
        url: `http://localhost:5000/reserva/${_id}`
      };
      const { data } = await axios(options);
      setReserva(data.content);
    } catch (error) {
       console.log(error)
    }

  };
  const updateReserva = async(reserva) => {

    try {
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        data: reserva,
        url: `http://localhost:5000/reserva/${reserva._id}`
      };
      const { data } = await axios(options);
      const dataActualizada= reservas.map((reserva) => {
        return reserva._id === data.content._id ? data.content : reserva;
      })
      setReservas(dataActualizada);
      setReserva({});
      showToast("warning", "Reserva Actualizada");
    } catch (error) {
      console.log(error)
    } 
  };

  const deleteReserva = async(_id) => {
    try {
     
      const options = {
        method: 'DELETE',
        url: `http://localhost:5000/reserva/${_id}`
      };
      const { data } = await axios(options);
      console.log(data)
      setReservas(reservas.filter(reserva => reserva._id !== _id));
      setReserva({});
    } catch (error) {
     console.log(error)
    } 

  };

  const submitReservasForm = (reserva) => {
    if (reserva._id === undefined) {
      createReserva(reserva);
    } else {
      updateReserva(reserva);
    }
  };

  useEffect(() => {
    localStorage.setItem("reservasData", JSON.stringify(reservas));
  }, [reservas]);

  useEffect(() => {
    readReservas();
  }, []);

  return (
    <main className="main">
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
  );
};

export default Reservas;
