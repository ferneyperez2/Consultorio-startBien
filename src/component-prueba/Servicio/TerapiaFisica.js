import React from "react";
import { motion } from "framer-motion";
import { FaRunning } from "react-icons/fa";
import styles from "./Especialidad.module.css";

const TerapiaFisica = () => (
  <motion.div
    className={styles.container}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h1 className={styles.title}>
      <FaRunning className={styles.icon} /> Terapia Física
    </h1>
    <p className={styles.description}>
      La terapia física ayuda a recuperar la movilidad y funcionalidad tras lesiones o cirugías, mediante ejercicios y técnicas especializadas adaptadas a cada paciente.
    </p>
  </motion.div>
);

export default TerapiaFisica;