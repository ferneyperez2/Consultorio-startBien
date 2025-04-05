// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Component/Home";
// import Services from "./Component/Servicio";
// import Contact from "./Component/Contact";
// import AgendarCita from "./Component/BookingSection";
// import Sidebar from "./Component/Sidebar";
// import Header from "./Component/Header";
// import Testimonios from "./Component/Testimonios";
// import React, { useState, useEffect } from "react";
// import { useTheme } from '../src/Component/ThemeContext'; // Asegúrate de que la ruta sea correcta

// import './App.css';
// import Navbar from "./Component/Navbar";
// function App() {

//   const { isDarkMode } = useTheme();

//   useEffect(() => {
//     // 
//     if (isDarkMode) {
//       document.body.classList.add('dark-mode');
//     } else {
//       document.body.classList.remove('dark-mode');
//     }
//   }, [isDarkMode]);

//   const [modoOscuro, setModoOscuro] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     if (modoOscuro) {
//       document.documentElement.classList.add("dark-mode");
//     } else {
//       document.documentElement.classList.remove("dark-mode");
//     }
//     localStorage.setItem("theme", modoOscuro ? "dark" : "light");
//   }, [modoOscuro]);
//   return (
//     <Router>
//        <div className={modoOscuro ? "dark-mode" : ""}>
//       <Header modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />
     
//     </div>

//       <Header/>
//       <Sidebar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* <Route path="/testimonio" element={<Testimonios />} /> */}
//         <Route path="/agendar-cita" element={<AgendarCita />} />
//       </Routes>

  

//     </Router>

    
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Services from "./Component/Servicio";
import Contact from "./Component/Contact";
import AgendarCita from "./Component/BookingSection";
import Sidebar from "./Component/Sidebar";
import Header from "./Component/Header";
import Testimonios from "./Component/Testimonios";
import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// AOS.init();

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

