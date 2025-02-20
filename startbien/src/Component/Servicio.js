import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Servicio.css";

const servicios = [
  {
    titulo: "TRAUMATOLOGÍA Y ORTOPEDIA",
    descripcion:
      "Lesiones de espalda, rodilla, fracturas, esguinces, lesiones deportivas, escoliosis, tratamiento pre y posquirúrgico.",
    imagen: "/imagenes/traumatologia.jpg",
  },
  {
    titulo: "Fonoaudióloga",
    descripcion:
      "Parálisis parcial o total, alteración del equilibrio, ELA, Parkinson, Esclerosis Múltiple, parálisis facial, neuropatías.",
    imagen: "/imagenes/neurologia.jpg",
  },
  {
    titulo: "Psicología ",
    descripcion:
      "Contracturas, espasmos musculares, desgarros y distensiones.",
    imagen: "/imagenes/patologia_muscular.jpg",
  },
  {
    titulo: "Terapia física ",
    descripcion:
      "Inflamación y desgaste articular, hombro doloroso, fibromialgia.",
    imagen: "/imagenes/reumatologia.jpg",
  },
  {
    titulo: "Medicina general",
    descripcion:
      "Inflamación y desgaste articular, hombro doloroso, fibromialgia.",
    imagen: "/imagenes/reumatologia.jpg",
  },
  {
    titulo: "Terapia respiratoria ",
    descripcion:
      "Inflamación y desgaste articular, hombro doloroso, fibromialgia.",
    imagen: "/imagenes/reumatologia.jpg",
  },

  {
    titulo: "Terapia ocupacional ",
    descripcion:
      "Inflamación y desgaste articular, hombro doloroso, fibromialgia.",
    imagen: "/imagenes/reumatologia.jpg",
  },
  {
    titulo: "Ortopedia ",
    descripcion:
      "Inflamación y desgaste articular, hombro doloroso, fibromialgia.",
    imagen: "/imagenes/reumatologia.jpg",
  },
];

const Servicios = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container servicios">
      <h2 className="text-center my-4" data-aos="fade-down">FISIOTERAPIA Y REHABILITACIÓN</h2>
      <div className="row">
        {servicios.map((servicio, index) => (
          <div key={index} className="col-md-3" data-aos="fade-up">
            <div className="card servicio-card">
              <img src={servicio.imagen} alt={servicio.titulo} className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title">{servicio.titulo}</h5>
                <p className="card-text">{servicio.descripcion}</p>
                <a href="/tratamientos" className="btn btn-primary">Ver Tratamientos</a>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{servicio.titulo}</h5>
                <p className="card-text">{servicio.descripcion}</p>
                <a href="/tratamientos" className="btn btn-primary">Ver Tratamientos</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;