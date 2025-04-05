import React, { useState } from "react";
import logo from "../Component/img/image.png"; 
import "./Header.css";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${darkMode ? "dark" : ""}`}>
      {/* Menú Hamburguesa */}
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars size={25} />
      </div> 

      {/* Logo y Título */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">StartBien</h1>
      </div>

      {/* Menú Responsive */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
       <p className="Text-header">Salud,belleza y bienestar</p>
      </nav>

      {/* Botón de Modo Oscuro/Claro */}
      <button className="mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        <span>{darkMode ? " Modo Claro" : " Modo Oscuro"}</span>
      </button>
    </header>
  );
};

export default Header;
