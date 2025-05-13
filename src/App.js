// Consultorio-startBien/src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Services from "./Component/Servicio";
import Contact from "./Component/Contact";
import AgendarCita from "./Component/BookingSection";
import Sidebar from "./Component/Sidebar";
import Header from "./Component/Header";
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import './App.css';
import AppointmentForm from "./Component/BookingSection";

function App() {
  // Estado para el modo oscuro
  const [modoOscuro, setModoOscuro] = useState(
    localStorage.getItem("theme") === "dark" || false
  );

  const Section = ({ id, title, children }) => (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h2>{title}</h2>
      <p>{children}</p>
    </motion.section>
  );

  // Aplicar el modo oscuro o claro cuando se cambia el estado
  useEffect(() => {
    if (modoOscuro) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem("theme", modoOscuro ? "dark" : "light");
  }, [modoOscuro]);

  return (
    <div className="fade-in"> 
      <Router data-aos="fade-up">
        <div className={modoOscuro ? "dark-mode" : ""}>
          <Header modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/agendar-cita" element={<AgendarCita />} />
          </Routes>
        </div>
      </Router>

      <Services />
      <br />
      <Contact />
      <br />
      <AppointmentForm />

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/573001112233?text=Hola,%20quiero%20agendar%20una%20cita%20con%20StartBien"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: "50px", height: "50px" }}
        />
      </a>
    </div>
  );
}

export default App;
