import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '../Component/img/image.png';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-bar">
        <div className="header-content">
          <img src={Logo} alt="StarBien" className="header-logo" />
          <span className="header-title">StarBien</span>
        </div>
        <nav className="header-nav">
          <ul className="header-links">
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>INICIO</Link>
            </li>
            <li>
              <Link to="/especialidades" className={location.pathname.startsWith("/especialidades") ? "active" : ""}>ESPECIALIDADES</Link>
            </li>
            <li>
              <Link to="/Contact" className={location.pathname === "/Contact" ? "active" : ""}>CONTACTO</Link>
            </li>
            <li>
              <Link to="/agendar-cita" className={location.pathname === "/agendar-cita" ? "active" : ""}>AGENDAR CITA</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;