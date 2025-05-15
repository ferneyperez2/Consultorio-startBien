import React from "react";
import './Servicio.css';
import HealingIcon from '@mui/icons-material/Healing';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RespiratoryTherapyIcon from '@mui/icons-material/RespiratoryTherapy'; // Updated import
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import OrthopedicIcon from '@mui/icons-material/Orthopedic'; // Updated import
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServicioCard from "./ServicioCard";

    const serviciosData = [
        {
            id: "fonoaudiologia",
            name: "Fonoaudiología",
            icon: <HealingIcon sx={{ fontSize: 30 }} />,
            desc: "Disciplina encargada de evaluar, diagnosticar...",
            linkTo: "/servicios/fonoaudiologia",
        },
        {
            id: "psicologia",
            name: "Psicología",
            icon: <PsychologyIcon sx={{ fontSize: 30 }} />,
            desc: "La psicología es la ciencia que estudia la conducta humana...",
            linkTo: "/servicios/psicologia",
        },
        {
            id: "terapia-fisica",
            name: "Terapia Física",
            icon: <FitnessCenterIcon sx={{ fontSize: 30 }} />,
            desc: "La Terapia Física busca prevenir, mejorar...",
            linkTo: "/servicios/terapia-fisica",
        },
        {
            id: "terapia-respiratoria",
            name: "Terapia Respiratoria",
            icon: <RespiratoryTherapyIcon sx={{ fontSize: 30 }} />, // This import should now work
            desc: "La terapia respiratoria es un conjunto de técnicas...",
            linkTo: "/servicios/terapia-respiratoria",
        },
        {
            id: "medicina-general",
            name: "Medicina General",
            icon: <LocalHospitalIcon sx={{ fontSize: 30 }} />,
            desc: "La medicina general es una especialidad médica...",
            linkTo: "/servicios/medicina-general",
        },
        {
            id: "terapia-ocupacional",
            name: "Terapia Ocupacional",
            icon: <AccessibilityNewIcon sx={{ fontSize: 30 }} />,
            desc: "La terapia ocupacional es un tratamiento que ayuda...",
            linkTo: "/servicios/terapia-ocupacional",
        },
        {
            id: "ortopedia",
            name: "Ortopedia",
            icon: <OrthopedicIcon sx={{ fontSize: 30 }} />, // This import should now work
            desc: "La ortopedia es la especialidad médica que se enfoca...",
            linkTo: "/servicios/ortopedia",
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
                            <ServicioCard
                                icon={servicio.icon}
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