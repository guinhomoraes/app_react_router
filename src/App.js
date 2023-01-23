import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/App.css';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Servico from './pages/Servico';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servico" element={<Servico />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
