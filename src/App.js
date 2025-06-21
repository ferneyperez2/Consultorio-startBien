import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from 'framer-motion';

import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import Services from "./Component/Servicio";
import Contact from "./Component/Contact";
import AgendarCita from "./Component/BookingSection";
import Footer from "./Component/Footer";
import HomeBanner from "./component-prueba/HomeBanner";
import EspecialidadesPreview from "./component-prueba/EspecialidadesPreview";
import  AppointmentForm from './Component/BookingSection';

//  los componentes de cada especialidad
import MedicinaGeneral from "./component-prueba/Servicio/MedicinaGeneral";
import Ortopedia from "./component-prueba/Servicio/Ortopedia";
import Fonoaudiologia from "./component-prueba/Servicio/Fonoaudiologia";
import Psicologia from "./component-prueba/Servicio/Psicologia";
import TerapiaFisica from "./component-prueba/Servicio/TerapiaFisica";
import TerapiaOcupacional from "./component-prueba/Servicio/TerapiaOcupacional";
import TerapiaRespiratoria from "./component-prueba/Servicio/TerapiaRespiratoria";
import Nutricion from "./component-prueba/Servicio/Nutricion";
import EsteticaFacial from "./component-prueba/Servicio/EsteticaFacial";
import EsteticaCorporal from "./component-prueba/Servicio/EsteticaCorporal";
import './App.css';

function App() {
    const [modoOscuro, setModoOscuro] = useState(
        localStorage.getItem("theme") === "dark" || false
    );

    useEffect(() => {
        if (modoOscuro) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem("theme", modoOscuro ? "dark" : "light");
    }, [modoOscuro]);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <div className="fade-in">
            <Router>
                <div className={modoOscuro ? "dark-mode" : ""}>
                    <Header modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />
                    <Sidebar />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={
                                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                    <HomeBanner />
                                </motion.div>
                            } />

                            {/* Rutas de especialidades individuales */}
                            <Route path="/servicios/medicina-general" element={<MedicinaGeneral />} />
                            {/* <Route path="/servicios/ortopedia" element={<Ortopedia />} /> */}
                            <Route path="/servicios/fonoaudiologia" element={<Fonoaudiologia/>} />
                            <Route path="/servicios/psicologia" element={<Psicologia />} />
                            <Route path="/servicios/terapia-fisica" element={<TerapiaFisica />} />
                            <Route path="/servicios/terapia-respiratoria" element={<TerapiaRespiratoria />} />

                            <Route path="/servicios/nutricion" element={<Nutricion/>} />
                              <Route path="/servicios/estetica-facial" element={<EsteticaFacial />} />
                                <Route path="/servicios/estetica-corporal" element={<EsteticaCorporal />} />

                            <Route path="/services" element={
                                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                    <Services />
                                </motion.div>
                            } />

                            <Route path="/contact" element={
                                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                    <Contact />
                                </motion.div>
                            } />

                            <Route path="/especialidades" element={
                 <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
             <EspecialidadesPreview />
        </motion.div>  
               } />

                            <Route path="/agendar-cita" element={
                                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                    <AppointmentForm />
                                </motion.div>
                            } />
                        </Routes>
                    </div>
                </div>
            </Router>

            {/* Botón flotante de WhatsApp */}
            <a
                href="https://wa.me/573122845333?text=Hola,%20quiero%20agendar%20una%20cita%20con%20StartBien"
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

            <Footer />
        </div>
    );
}

export default App;