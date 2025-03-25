import React, { useState, useEffect } from "react";
import logo from "../Component/img/image.png"; 
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import "./Header.css"; 

const Header = () => {
  // Leer la preferencia guardada en localStorage
  const storedTheme = localStorage.getItem("theme") || "light";
  const [modoOscuro, setModoOscuro] = useState(storedTheme === "dark");

  useEffect(() => {
    // Aplicar la clase de modo oscuro si es necesario
    if (modoOscuro) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [modoOscuro]);

  const toggleModo = () => {
    const newTheme = !modoOscuro ? "dark" : "light";
    setModoOscuro(!modoOscuro);
    localStorage.setItem("theme", newTheme); // Guardar en localStorage
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaBars className="menu-icon" />
        <img src={logo} alt="StartBien" className="logo" />
      </div>
      <div className="navbar-right">
        <span className="brand">StartBien</span>
        <button className="modo-toggle" onClick={toggleModo}>
          {modoOscuro ? <FaSun className="icon" /> : <FaMoon className="icon" />}
          {modoOscuro ? "Modo Claro" : "Modo Oscuro"}
        </button>
      </div>
    </nav>
  );
};

export default Header;
