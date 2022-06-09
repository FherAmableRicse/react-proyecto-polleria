import { Route, Routes } from "react-router-dom";
import PolleriaLayout from "./layouts/PolleriaLayout";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Reservas from "./pages/Reservas";
import Pedidos from "./pages/Pedidos";
import Contactenos from "./pages/Contactenos";
import Page404 from "./pages/Page404";
import { PolleriaProvider } from "./context/PolleriaContext";
import Reclamos from "./pages/Reclamos";
import Preguntas from "./pages/Preguntas";
import Locales from "./pages/Locales";

function App() {
  return (
    <PolleriaProvider>
      <Routes>
        <Route path="/" element={<PolleriaLayout />}>
          <Route path="pedidos" element={<Pedidos />} />
          <Route path="reservas" element={<Reservas />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contactenos />} />
          <Route path="locales" element={<Locales />} />
          <Route path="preguntas" element={<Preguntas />} />
          <Route path="reclamos" element={<Reclamos />} />
          <Route index element={<Inicio />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </PolleriaProvider>
  );
}

export default App;
