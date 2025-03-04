import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Services from "./Component/Servicio";
import Contact from "./Component/Contact";
import AgendarCita from "./Component/BookingSection";
import Sidebar from "./Component/Sidebar";
import Header from "./Component/Header";
import Testimonios from "./Component/Testimonios";


import './App.css';
import Navbar from "./Component/Navbar";
function App() {
  return (
    <Router>
      <Header/>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/testimonio" element={<Testimonios />} /> */}
        <Route path="/agendar-cita" element={<AgendarCita />} />
      </Routes>

  

    </Router>

    
  );
}

export default App;
