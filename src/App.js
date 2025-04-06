// Consultorio-startBien/src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Services from "./Component/Servicio";
import Contact from "./Component/Contact";
import AgendarCita from "./Component/BookingSection";
import Sidebar from "./Component/Sidebar";
import Header from "./Component/Header";
import React, { useState, useEffect } from "react";


import './App.css';

function App() {
  // Estado para el modo oscuro
  const [modoOscuro, setModoOscuro] = useState(
    localStorage.getItem("theme") === "dark" || false
  );

  // Aplicar el modo oscuro o claro cuando se cambia el estado
  useEffect(() => {
    if (modoOscuro) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Guardar la preferencia del tema en el localStorage
    localStorage.setItem("theme", modoOscuro ? "dark" : "light");
  }, [modoOscuro]);

  return (
    <div className="fade-in"> 
    <Router  data-aos="fade-up">
      <div className={modoOscuro ? "dark-mode" : ""}>
        <Header modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/testimonio" element={<Testimonios />} /> */}
          <Route path="/agendar-cita" element={<AgendarCita />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

