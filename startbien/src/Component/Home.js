import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp, FaUserMd, FaCalendarAlt } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home">
      {/* Banner Principal */}
      <section className="hero">
        <div className="container text-center">
          <h1 data-aos="fade-down">Bienvenidos a <span>StartBien</span></h1>
          <p data-aos="fade-up">Expertos en Fisioterapia y Rehabilitación</p>
          <a href="https://wa.me/123456789" className="btn btn-primary btn-lg">
            <FaWhatsapp /> Agendar Cita
          </a>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="container servicios">
        <h2 className="text-center" data-aos="fade-down">Nuestros Servicios</h2>
        <div className="row">
          <div className="col-md-4" data-aos="flip-left">
            <div className="card servicio-card">
              <FaUserMd className="icon" />
              <h3>Atención Especializada</h3>
              <p>Fisioterapia avanzada con especialistas certificados.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="flip-up">
            <div className="card servicio-card">
              <FaCalendarAlt className="icon" />
              <h3>Agendamiento Fácil</h3>
              <p>Reserva tu cita vía WhatsApp de forma rápida y sencilla.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="flip-right">
            <div className="card servicio-card">
              <FaWhatsapp className="icon" />
              <h3>Soporte 24/7</h3>
              <p>Siempre disponibles para resolver tus dudas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="contacto text-center">
        <h2 data-aos="fade-up">¡Contáctanos Ahora!</h2>
        <p data-aos="fade-up">Tu bienestar es nuestra prioridad.</p>
        <a href="https://wa.me/123456789" className="btn btn-success">
          <FaWhatsapp /> Escribir en WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Home;