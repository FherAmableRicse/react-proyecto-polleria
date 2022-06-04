import { useState } from "react";
import "./App.css";
import ReservasForm from "./components/reservas/ReservasForm";
import ReservasReservas from "./components/reservas/ReservasReservas";
import Header from "./components/sections/Header";
import { v4 as uuidv4 } from "uuid";
import { Route, Routes } from "react-router-dom";
import PolleriaLayout from "./layouts/PolleriaLayout";
import Pedidos from "./pages/Pedidos";
import Contactenos from "./pages/Contactenos";
import Page404 from "./pages/Page404";

function App() {
  const [reservas, setReservas] = useState([]);
  const [reserva, setReserva] = useState({});

  const createReserva = (reserva) => {
    reserva.id = uuidv4();
    setReservas([...reservas, reserva]);
  };

  // const readReserva = (id) => {
  //   const reserva = reservas.find((element) => {
  //     return element.id === id;
  //   });
  //   setReserva(reserva);
  // };

  const submitReserva = (reserva) => {
    if (reserva.id) {
      console.log("editar");
    } else {
      createReserva(reserva);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<PolleriaLayout />}>
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="reservas" element={<h1>Reservas </h1>} />
        <Route path="nosotros" element={<h1>Nosotros</h1>} />
        <Route path="contacto" element={<Contactenos />} />
        <Route index element={<h1>Index</h1>} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
