import React, { useState, useEffect } from 'react';
import './HeroFisio.css';
import { motion } from 'framer-motion';

// Importa imágenes de alta resolución (reemplaza con tus rutas)
import ortopedia from '../Component/img/ortopedia.png';
import  medicinagenarl from '../Component/img/Medicina General.png';
import fisio from '../Component/img/Terapia Física.png';
import fonoaudiologia from '../Component/img/Fonoaudiología.png';
import psicologia from '../Component/img/Psicología.png';
import Terapiaocupacional from '../Component/img/Terapia Ocupacional.png';
import terepiarespiratoria from '../Component/img/Terapia Respiratoria.png'

const imagenes = [medicinagenarl, ortopedia, fisio,fonoaudiologia, psicologia, Terapiaocupacional, terepiarespiratoria];

const HeroFisio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
        }, 2000); // Cambia la imagen cada 3 segundos

        return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
    }, []);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <section className="hero-fisio">
            <div className="hero-fisio__text-container">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
                >
                    Tu Bienestar en Movimiento con StartBien
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
                >
                    Fisioterapia integral y personalizada para una recuperación efectiva y duradera.
                    Tecnología avanzada y profesionales expertos a tu servicio.
                </motion.p>
                {/* <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: 'easeInOut' }}
                    className="hero-fisio__button"
                >
                    Descubre Nuestros Servicios
                </motion.button> */}
            </div>
            <div className="hero-fisio__image-container">
                <motion.img
                    key={currentIndex}
                    src={imagenes[currentIndex]}
                    alt={`Fisioterapia StartBien ${currentIndex + 1}`}
                    className="hero-fisio__image"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'tween', duration: 0.5 }}
                    custom={1} // Puedes ajustar la dirección si es necesario
                />
            </div>
        </section>
    );
};

export default HeroFisio;