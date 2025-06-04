import React from "react";
import './Servicio.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServicioCardConLeerMas from "./ServicioCardConLeerMas"; // Importa el nuevo componente

// Importa tus imágenes
import fonoaudiologia from './img/Fonoaudiología.png';
import  psicologia from './img/Psicología.png';
import terapiafisica from './img/Terapia Física.png';
import terapiaRespiratoria from './img/Terapia Respiratoria.png';
import medicinaGeneral from './img/Medicina General.png';
import terapiaOcupacional from './img/Terapia Ocupacional.png';
import ortopedia from './img/ortopedia.png';

const serviciosData = [
    {
        id: "fonoaudiologia",
        name: "Fonoaudiología",
        iconSrc: fonoaudiologia,
        desc: "Son muchas las profesiones que se dedican a diagnosticar y solucionar los problemas auditivos. En esta ocasión hablaremos de la fonoaudiología, disciplina que combina las ciencias de la salud, la psicología y la lingüística para ayudarnos con las dificultades de comunicación.",
        linkTo: "/servicios/fonoaudiologia",
    },
    {
        id: "psicologia",
        name: "Psicología",
        iconSrc: psicologia,
        desc: "La psicología es la ciencia que estudia la conducta humana y los procesos mentales. Busca comprender cómo pensamos, sentimos, aprendemos y nos comportamos, aplicando este conocimiento para ayudar a las personas a enfrentar sus desafíos y mejorar su bienestar.",
        linkTo: "/servicios/psicologia",
    },
    {
        id: "terapia-fisica",
        name: "Terapia Física",
        iconSrc: terapiafisica,
        desc: "La Terapia Física busca prevenir, mejorar y rehabilitar las funciones físicas y la movilidad del cuerpo que pueden verse afectadas por lesiones, enfermedades o el envejecimiento. Utiliza una variedad de técnicas como ejercicio terapéutico, terapia manual, electroterapia y educación del paciente.",
        linkTo: "/servicios/terapia-fisica",
    },
    {
        id: "terapia-respiratoria",
        name: "Terapia Respiratoria",
        iconSrc: terapiaRespiratoria,
        desc: "La terapia respiratoria es un conjunto de técnicas y tratamientos diseñados para mejorar la función pulmonar y la calidad de vida de las personas con enfermedades respiratorias crónicas o agudas. Incluye ejercicios de respiración, administración de medicamentos inhalados, oxigenoterapia y rehabilitación pulmonar.",
        linkTo: "/servicios/terapia-respiratoria",
    },
    {
        id: "medicina-general",
        name: "Medicina General",
        iconSrc: medicinaGeneral,
        desc: "La medicina general es una especialidad médica que se enfoca en la atención primaria de la salud para personas de todas las edades. Los médicos generales diagnostican y tratan una amplia gama de enfermedades comunes, realizan exámenes de rutina, brindan consejos de prevención y coordinan la atención con otros especialistas cuando es necesario.",
        linkTo: "/servicios/medicina-general",
    },
    {
        id: "terapia-ocupacional",
        name: "Terapia Ocupacional",
        iconSrc: terapiaOcupacional,
        desc: "La terapia ocupacional es un tratamiento que ayuda a personas de todas las edades a participar en las actividades cotidianas que son importantes para ellos. Los terapeutas ocupacionales evalúan las habilidades de los individuos y diseñan planes de intervención para mejorar su independencia en áreas como el autocuidado, el trabajo, el estudio y el ocio.",
        linkTo: "/servicios/terapia-ocupacional",
    },
    {
        id: "ortopedia",
        name: "Ortopedia",
        iconSrc: ortopedia,
        desc: " La ortopedia es la especialidad médica que se enfoca en el diagnóstico, tratamiento, prevención y rehabilitación de las enfermedades y lesiones del sistema musculoesquelético, que incluye huesos, articulaciones, músculos, ligamentos y tendones. Los ortopedistas utilizan una variedad de técnicas, desde tratamientos conservadores como fisioterapia y medicamentos hasta cirugías para corregir deformidades o reparar lesiones.",
        linkTo: "/servicios/ortopedia",
        imageSrc: ortopedia,
    },
];

function Services() {
    return (
        <motion.section
            id="services"
            className="services-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2>Servicios</h2>
            <div className="services-grid">
                {serviciosData.map((servicio) => (
                    <motion.div key={servicio.id} className="service-card-wrapper">
                        <ServicioCardConLeerMas
                            iconSrc={servicio.iconSrc}
                            title={servicio.name}
                            description={servicio.desc}
                            linkTo={`/servicios/${servicio.id}`}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default Services;