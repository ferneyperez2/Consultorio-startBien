import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { AiFillSchedule } from "react-icons/ai";
import MapaConsultorio from "./Mapa";
import "./Contact.css";

const Contact = () => {
  const [mostrarInfo, setMostrarInfo] = useState(true);

  return (
    <div className="contacto-container">
      <h2 className="titulo">Contacto</h2>

      <button className="toggle-boton" onClick={() => setMostrarInfo(!mostrarInfo)}>
        {mostrarInfo ? "Ocultar Información" : "Mostrar Información"}
      </button>

      {mostrarInfo && (
        <div className="contacto-grid">
          <div className="info">
            <div className="item">
            <FaLocationArrow className="icono" />
              <h3>Dirección</h3>
              <p>Cl. 13 #3-39, Montelibano, Montelíbano, Córdoba</p>
            </div>

            <div className="item">
                      <FaWhatsapp className="icono"/>           
                         <h3>Whatsapp</h3>
              <a href="https://wa.me/573122845333" target="_blank" rel="noopener noreferrer">
                +57 3122845333

              </a>
            </div>

            <div className="item">
            <FaPhoneAlt className="icono"/>
           
              <h3>Celular</h3>
              <p>3122845333
              </p>
            </div>

            <div className="item">
            <CgMail className="icono" />
              
              <h3>Correo Electrónico</h3>
              <a href="bibianaester@gmail.com">bibianaester@gmail.com</a>
            </div>

            <div className="item">
            <AiFillSchedule className="icono" />
          
              <h3>Horario</h3>
              <p>Lunes a Viernes</p>
              <p>07:00 AM – 5:00 PM</p> 
            </div>
          </div>

 <div className="mapa">
        <h3>Ubicación</h3>
        <p>Encuentra la ubicación de nuestro consultorio en el mapa</p>
        <div className="mapa-container">
        <MapaConsultorio />
        </div>
      </div>
          
     
      
        
        </div>
      )}
    </div>
  );
};

export  default Contact;