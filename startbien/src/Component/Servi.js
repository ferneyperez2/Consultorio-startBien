import React from "react";
import { FaUserMd, FaCalendarCheck, FaHeadset } from "react-icons/fa";

const Servi = () => {
  return (
    <section id="servicios" className="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="servicios-container">
        <div className="servicio">
          <FaUserMd className="icon" />
          <h3>Atención Especializada</h3>
          <p>Fisioterapia avanzada con especialistas certificados.</p>
        </div>
        <div className="servicio">
          <FaCalendarCheck className="icon" />
          <h3>Agendamiento Fácil</h3>
          <p>Reserva tu cita vía WhatsApp de forma rápida y sencilla.</p>
        </div>
        <div className="servicio">
          <FaHeadset className="icon" />
          <h3>Soporte 24/7</h3>
          <p>Siempre disponibles para resolver tus dudas.</p>
        </div>
      </div>
    </section>
  );
};

export default Servi;
