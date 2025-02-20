import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Citas from "./Component/Cita";
import Contact from "./Component/Contact";
import Home from "./Component/Home";

import Servicios from "./Component/Servicio";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="/Citas" element={<Citas/>} />
 
      </Routes>
    </Router>
  );
};

export default App;