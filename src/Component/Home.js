import React from "react";
import "./Home.css";
import { FaUserMd, FaCalendarCheck, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
    const cardVariants = {
        offscreen: {
            opacity: 0,
            y: 50,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1,
            },
        },
    };

    return (
        <motion.section
            className="services-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }} // Anima cuando el 30% del componente está visible
        >
            <h2>StartBien</h2>
            <motion.div className="services-grid">
                <motion.div className="service-card" variants={cardVariants}>
                    <FaUserMd />
                    <h3>Atención Especializada</h3>
                    <p>Fisioterapia avanzada con especialistas para darte una mejor atencion.</p>
                </motion.div>

                <motion.div className="service-card" variants={cardVariants} transition={{ delay: 0.2 }}>
                    <FaCalendarCheck />
                    <h3>Agendamiento Fácil</h3>
                    <p>Reserva tu cita vía WhatsApp de forma rápida y sencilla.</p>
                </motion.div>

                <motion.div className="service-card" variants={cardVariants} transition={{ delay: 0.4 }}>
                    <FaHeadset />
                    <h3>Soporte 24/7</h3>
                    <p>Siempre disponibles para resolver tus dudas.</p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Home;