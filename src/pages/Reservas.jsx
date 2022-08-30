import { useEffect, useState } from "react";
import { showToast } from "../utils/sweetalert";
import ReservasForm from "../components/reservas/ReservasForm";
import ReservasReservas from "../components/reservas/ReservasReservas";
import {GetReservas,PostReserva,GetReserva,UpdateReserva,DeleteReserva} from "../services/reservaServices";
const Reservas = () => {
  let localStorageReservas =
    JSON.parse(localStorage.getItem("reservasData")) ?? [];

  const [reserva, setReserva] = useState({});
  const [reservas, setReservas] = useState(localStorageReservas);

  const createReserva = async(reserva) => {
    try {
      const data=await PostReserva(reserva);
      setReservas([...reservas, data.content]);
      showToast("success", "Reserva Creada");
    } catch (error) {
      console.log(error)
    } 
  
  };
  
  const readReservas =  async() =>{
    try {
      const data=await GetReservas();
     setReservas(data.content);
    } catch (error) {
      console.log(error);
    }
  }

  const readReserva = async(_id) => {
    try {
     
      const data=await GetReserva(_id);
      setReserva(data.content);
    } catch (error) {
       console.log(error)
    }

  };
  const updateReserva = async(reserva) => {

    try {
      const data=await UpdateReserva(reserva)
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
      await DeleteReserva(_id);
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
