import '../App.css'
import SobreMi from "./SobreMi/SobreMi";
import Navbar from './Navbar/Navbar';
import Estudios from './Estudios/Estudios';
import Certificados from './Certficados/Certificados';
import Habilidades from './Habilidades/Habilidades';
import Proyectos from './Proyectos/Proyectos';
import Todo from './Todo/Todo'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





const App = () => {
  return (
    <>

      <header>
        <Navbar />
      </header>

      <Router>
        <Routes>
              <Route path="/" element={<Todo />} />
              <Route path="/SobreMi" element={<SobreMi/>} />
              <Route path="/Estudios" element={<Estudios />} />
              <Route path="/Habilidades" element={<Habilidades />} />
              <Route path="/Certificados" element={<Certificados />} />
              <Route path="/Proyectos" element={<Proyectos />} />
        </Routes>
      </Router>
    </>

  );
};

export default App;