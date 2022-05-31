import { Route, Routes } from 'react-router-dom';
import PolleriaLayout from './layouts/PolleriaLayout';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Reservas from './pages/Reservas';


function App() {

  return (
    <Routes>
      <Route path="/" element={<PolleriaLayout />}>
        <Route path="pedidos" element={<h1>Empieza tu pedido</h1>} />
        <Route path="reservas" element={<Reservas />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="contacto" element={<h1>Contactenos</h1>} />
        <Route index element={<Inicio />} />
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>



  );
}

export default App;
