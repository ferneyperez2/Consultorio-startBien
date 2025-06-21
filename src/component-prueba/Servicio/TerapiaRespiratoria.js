import React from "react";
import { motion } from "framer-motion";
import { FaWind } from "react-icons/fa";
import styles from "./Especialidad.module.css";

const TerapiaRespiratoria = () => (
  <motion.div
    className={styles.container}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h1 className={styles.title}>
      <FaWind className={styles.icon} /> Terapia Respiratoria
    </h1>
    <p className={styles.description}>
      La terapia respiratoria está orientada a mejorar la función pulmonar en pacientes con enfermedades respiratorias, utilizando técnicas y ejercicios especializados.
    </p>
  </motion.div>
);

export default TerapiaRespiratoria;