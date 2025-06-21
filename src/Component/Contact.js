import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLocationArrow, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import MapaConsultorio from "./Mapa";
import "./Contact.css";

const infoItems = [
  {
    icon: <FaLocationArrow className="icono location" />,
    title: "Dirección",
    content: (
      <a
        href="https://www.google.com/maps/place/Cl.+13+%233-39,+Montelíbano,+Córdoba"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cl. 13 #3-39, Montelibano, Montelíbano, Córdoba
      </a>
    ),
  },
  {
    icon: <FaWhatsapp className="icono whatsapp" />,
    title: "Whatsapp",
    content: (
      <a href="https://wa.me/573122845333" target="_blank" rel="noopener noreferrer">
        +57 3122845333
      </a>
    ),
  },
  {
    icon: <FaPhoneAlt className="icono phone" />,
    title: "Celular",
    content: (
      <a href="tel:3122845333">
        3122845333
      </a>
    ),
  },
  {
    icon: <FaEnvelope className="icono mail" />,
    title: "Correo Electrónico",
    content: (
      <a href="mailto:bibianaester@gmail.com">
        bibianaester@gmail.com
      </a>
    ),
  },
  {
    icon: <FaClock className="icono clock" />,
    title: "Horario",
    content: (
      <>
        <p>Lunes a Viernes</p>
        <p>07:00 AM – 5:00 PM</p>
      </>
    ),
  },
];

const Contact = () => {
  const [mostrarInfo, setMostrarInfo] = useState(true);

  return (
    <div className="contacto-container">
      <h2 className="titulo">Contacto</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="toggle-boton" onClick={() => setMostrarInfo(!mostrarInfo)}>
          {mostrarInfo ? "Ocultar Información" : "Mostrar Información"}
        </button>
      </div>

      {mostrarInfo && (
        <div className="contacto-grid">
          <motion.div
            className="info"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {infoItems.map((item, idx) => (
              <motion.div
                className="item"
                key={idx}
                whileHover={{ scale: 1.03, boxShadow: "0 6px 24px rgba(25,118,210,0.10)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
                <h3>{item.title}</h3>
                <div>{item.content}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mapa"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3>Ubicación</h3>
            <p>
              <b>Encuentra la ubicación de nuestro consultorio en el mapa</b>
            </p>
            <div className="mapa-container">
              <MapaConsultorio />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Contact;