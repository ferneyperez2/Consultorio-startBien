import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Íconos de hamburguesa y cerrar
import "./Sidebar.css"; // Importamos los estilos

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón de menú hamburguesa */}
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menú lateral */}
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Servicios</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contacto</Link></li>
          <li><Link to="/agendar-cita" onClick={() => setIsOpen(false)}>Agendar Cita</Link></li>
          {/* <li><Link to="/testimonio" onClick={() => setIsOpen(false)}>Testimonios</Link></li> */}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
