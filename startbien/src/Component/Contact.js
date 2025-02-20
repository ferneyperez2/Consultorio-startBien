import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { AiFillSchedule } from "react-icons/ai";

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
              <p>Calle 100 # 60 – 04, Consultorio 617, Bogotá, Colombia</p>
            </div>

            <div className="item">
                      <FaWhatsapp className="icono"/>           
                         <h3>Whatsapp</h3>
              <a href="https://wa.me/573174306574" target="_blank" rel="noopener noreferrer">
                +57 317 430 65 74
              </a>
            </div>

            <div className="item">
            <FaPhoneAlt className="icono"/>
           
              <h3>Celular</h3>
              <p>317 430 65 74</p>
            </div>

            <div className="item">
            <CgMail className="icono" />
              
              <h3>Correo Electrónico</h3>
              <a href="mailto:info@fisioterapia.com.co">info@fisioterapia.com.co</a>
            </div>

            <div className="item">
            <AiFillSchedule className="icono" />
          
              <h3>Horario</h3>
              <p>Lunes a Viernes</p>
              <p>7:00 AM – 7:00 PM</p>
            </div>
          </div>

          <div className="mapa">
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.786892840499!2d-74.05372808457066!3d4.683323143228966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3b4b8c71a7%3A0xf8b5dfd217d6b7c9!2sCalle%20100%20%23%2060%20-%2004%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1615291874932!5m2!1ses!2sco"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;