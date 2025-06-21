

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomeBanner.css';

import EspecialidadesPreview from './EspecialidadesPreview';
// import EquipoPreview from './EquipoPreview';

import medicinageneral from '../Component/img/Medicina General.png';
import Logo from '../Component/img/logo.jpeg';
import Pscologia from '../Component/img/Psicología.png';
import clinicaAldanaBanner from '../Component/img/Medicina General.png';
// import AppointmentForm from '../Component/BookingSection';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: 'easeOut'
    }
  }
});

const HomeBanner = () => {
  return (
    <section className="banner-container">
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        transitionTime={700}
      >
        <div className="carousel-image">
          <img src={medicinageneral} alt="Banner 1" loading="lazy" />
        </div>
        <div className="carousel-image">
          <img src={Logo} alt="Banner 2" loading="lazy" />
        </div>
        <div className="carousel-image">
          <img src={Pscologia} alt="Banner 3" loading="lazy" />
        </div>
      </Carousel>

      {/* Info Section */}
      <motion.div
        className="info-section"
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="info-box" variants={fadeIn(0.3)}>
          <h3>⏰ Horario de atención</h3>
          <p>Lunes a viernes: 07:00 A.M - 05:00 P.M.</p>
          <p>Viernes: 9:00 - 17:00 hrs.</p>
        </motion.div>
        <motion.div className="info-box" variants={fadeIn(0.4)}>
          <h3>📞 Contacto</h3>
          <p>Teléfono: 3122845333</p>
          <p>Whatsapp: +57 3122845333</p>
        </motion.div>
        <motion.div className="info-box" variants={fadeIn(0.5)}>
          <h3>📍 Dirección</h3>
          <p>Cl. 13 #3-39, Montelibano, Montelíbano, Córdoba</p>
        </motion.div>
      </motion.div>

      {/* Por qué elegirnos */}
      <motion.div
        className="why-choose-section"
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="why-choose-text" variants={fadeIn(0.3)}>
          <h2>¿Por qué elegir <br /> <span>Consultorio Starbien</span>?</h2>
          <p>
            El consultorio fue fundado por la Dra. Villorina en el año 2004, con el propósito de entregar un servicio odontológico integral y de excelencia, viendo a nuestros pacientes como personas únicas que necesitan tratamientos personalizados, abarcando desde la prevención hasta tratamientos de mayor complejidad, siempre aplicando un enfoque multidisciplinario.
          </p>
          {/* <button onClick={AppointmentForm}>RESERVA TU HORA</button> */}
        </motion.div>
        <motion.div className="why-choose-img" variants={fadeIn(0.4)}>
          <img src={clinicaAldanaBanner} alt="Clínica Aldana" loading="lazy" />
        </motion.div>
      </motion.div>

      {/* Especialidades */}
      <motion.div
        className="Especialides"
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <EspecialidadesPreview />
      </motion.div>

      {/* Equipo Médico */}
      <motion.div
        className="Especialides"
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* <EquipoPreview /> */}
      </motion.div>
    </section>
  );
};

export default HomeBanner;
