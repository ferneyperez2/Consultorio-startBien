import React from "react";
import "./Home.css"; // Usa los estilos mejorados
import { FaUserMd, FaCalendarCheck, FaHeadset } from "react-icons/fa"; // Íconos modernos

const Home = () => {
  return (
    <section className="services-container">
      <h2>StartBien</h2>
      <div className="services-grid">
        <div className="service-card">
          <FaUserMd />
          <h3>Atención Especializada</h3>
          <p>Fisioterapia avanzada con especialistas para darte una mejor atencion.</p>
        </div>

        <div className="service-card">
          <FaCalendarCheck />
          <h3>Agendamiento Fácil</h3>
          <p>Reserva tu cita vía WhatsApp de forma rápida y sencilla.</p>
        </div>

        <div className="service-card">
          <FaHeadset />
          <h3>Soporte 24/7</h3>
          <p>Siempre disponibles para resolver tus dudas.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
