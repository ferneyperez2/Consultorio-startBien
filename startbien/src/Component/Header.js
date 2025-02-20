import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Component/img/logo.jpeg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="StartBien" />
        <h1>STARTBIEN</h1>
      </div>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/Contact">Contacto</Link></li>
        <li><Link to="/Citas">Agendar Cita</Link></li>
      </ul>
    </nav>
  );
};

export default Header;