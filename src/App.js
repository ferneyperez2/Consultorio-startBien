    // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    // // import Home from "./Component/Home";
    // import Services from "./Component/Servicio";
    // import Contact from "./Component/Contact";
    // import AgendarCita from "./Component/BookingSection";
    // import Sidebar from "./Component/Sidebar";
    // import Header from "./Component/Header";
    // import React, { useState, useEffect } from "react";
    // import { motion } from 'framer-motion';
    // import './App.css';
    // import AppointmentForm from "./Component/BookingSection";
    // import ServiceDetailPage from "./Component/ServiceDetailPage";
    // import Footer from "./Component/Footer";
    // // componente de prueba home 

    // import HomeBanner from "./component-prueba/HomeBanner";

    // function App() {
    //     const [modoOscuro, setModoOscuro] = useState(
    //         localStorage.getItem("theme") === "dark" || false
    //     );

    //     useEffect(() => {
    //         if (modoOscuro) {
    //             document.body.classList.add('dark-mode');
    //         } else {
    //             document.body.classList.remove('dark-mode');
    //         }
    //         localStorage.setItem("theme", modoOscuro ? "dark" : "light");
    //     }, [modoOscuro]);

    //     const sectionVariants = {
    //         hidden: { opacity: 0, y: 50 },
    //         visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    //     };

    //     return (
    //         <div className="fade-in">
    //             <Router data-aos="fade-up">
    //                 <div className={modoOscuro ? "dark-mode" : ""}>
    //                     <Header modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />
    //                     <Sidebar />
    //                     <div className="content">
    //                         <Routes>
    //                             <Route path="/" element={<motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><HomeBanner/></motion.div>} />
    //                             {/* Services component is now only rendered via a Route */}
    //                             <Route path="/services" element={<motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><Services /></motion.div>} />
    //     {/* ... */}
    //                             <Route path="/contact" element={<motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><Contact /></motion.div>} />
    //                             <Route path="/agendar-cita" element={<motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><AgendarCita /></motion.div>} />
    //                             <Route path="/servicios/:serviceId" element={<motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><ServiceDetailPage /></motion.div>} />
                            
    //                         </Routes>
    //                     </div>
    //                 </div>
    //             </Router>

    //             {/* REMOVE this instance of Services */}
    //             {/* <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    //                 <Services />
    //             </motion.div> */}
    //             <br />
    //             <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
    //                 <Contact />
    //             </motion.div>
    //             <br />
    //             <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
    //                 <AppointmentForm />
    //             </motion.div>

    //             {/* Botón flotante de WhatsApp */}
    //             <a
    //                 href="https://wa.me/573001112233?text=Hola,%20quiero%20agendar%20una%20cita%20con%20StartBien"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="whatsapp-button"
    //             >
    //                 <img
    //                     src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    //                     alt="WhatsApp"
    //                     style={{ width: "50px", height: "50px" }}
    //                 />
    //             </a>
    //             <Footer />
                
    //         </div>
    //     );
    // }

    // export default App;


    import React, { useState, useEffect } from "react";
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import { motion } from 'framer-motion';

    import Header from "./Component/Header";
    import Sidebar from "./Component/Sidebar";
    import Services from "./Component/Servicio";
import Contact from "./Component/Contact";
    import AgendarCita from "./Component/BookingSection";
    import AppointmentForm from "./Component/BookingSection";
    import ServiceDetailPage from "./Component/ServiceDetailPage";
    import Footer from "./Component/Footer";
    import HomeBanner from "./component-prueba/HomeBanner";

    // NUEVOS COMPONENTES DE RUTA
    import NuestroEquipo from "../src/component-prueba/NuestroEquipo";         // Asegúrate de tener este archivo
    // import EspecialidadesHome from "../src/component-prueba/EspecialidadesHome"; // Asegúrate de tener este archivo

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

                                <Route path="/nuestro-equipo" element={
                                    <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                        <NuestroEquipo />
                                    </motion.div>
                                } />

                                <Route path="/especialidades" element={
                                    <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                        {/* <EspecialidadesHome /> */}
                                    </motion.div>
                                } />

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

                                <Route path="/agendar-cita" element={
                                    <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                        <AgendarCita />
                                    </motion.div>
                                } />

                                <Route path="/servicios/:serviceId" element={
                                    <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                        <ServiceDetailPage />
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
