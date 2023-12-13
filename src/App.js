import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';

import { Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout";
import Default from "./Components/Default";
import Java from "./Components/java";
import Python from "./Components/python";
import Php from "./Components/php";
import Sql from "./Components/sql";
import Html from "./Components/html";
import Javascrip from "./Components/javascrip";
import Cmas from "./Components/cmas";



import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <h1>Lenguajes de programación</h1>
      <p>NOTA: Estos son botones te daran mas informacion sobre cada uno de los lenguajes disponibles para regresar solo vasta en window dar a</p>
      <p>la flecha de atras y en android con el boton de retroceso ambos en defecto del sistema y los creditos se encuentran al lado de logos </p>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/java" element={<Java />} />
        <Route path="/python" element={<Python />} />
        <Route path="/php" element={<Php />} />
        <Route path="/sql" element={<Sql />} />
        <Route path="/html" element={<Html />} />
        <Route path="/javascrip" element={<Javascrip />} />
        <Route path="/cmas" element={<Cmas />} />
        <Route path="*" element={<Default />} />
      </Routes>
      <Skills/>
      <Projects/>
      
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;



