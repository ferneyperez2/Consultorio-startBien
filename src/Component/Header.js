import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../Component/img/image.png';

function Header() {
   const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-buttons">
          <button className="btn">StarBien</button>
        </div>
      </div>

      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="StarBien" />
        </div>

        {/* <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </div> */}

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>INICIO</Link></li>
          <li><Link to="/nuestro-equipo" onClick={() => setMenuOpen(false)}>NUESTRO EQUIPO</Link></li>
          <li><Link to="/especialidades" onClick={() => setMenuOpen(false)}>ESPECIALIDADES</Link></li>
          <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>CONTACTO</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
