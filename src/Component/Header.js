// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../Component/img/image.png'; // Usa import para la imagen

function Header() {
  return (
    <header className="header">
      {/* Top bar */}
      <div className="top-bar">
        <div className="top-buttons">
          <button className="btn">StarBien</button>
        </div>
      </div>

      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="StarBien" />
        </div>

        <ul className="nav-links">
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/nuestro-equipo">NUESTRO EQUIPO</Link></li>
          <li><Link to="/especialidades">ESPECIALIDADES</Link></li>
          <li><Link to="/Contact">CONTACTO</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
