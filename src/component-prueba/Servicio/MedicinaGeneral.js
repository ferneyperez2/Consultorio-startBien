import React from "react";
import { motion } from "framer-motion";
import { FaStethoscope } from "react-icons/fa";
import styles from "./Especialidad.module.css";

const MedicinaGeneral = () => (
  <motion.div
    className={styles.container}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h1 className={styles.title}>
      <FaStethoscope className={styles.icon} /> Medicina General
    </h1>
    <p className={styles.description}>
      La medicina general es la puerta de entrada al sistema de salud. Nuestros médicos generales están capacitados para diagnosticar, tratar y prevenir enfermedades comunes, brindando atención integral y humana a cada paciente.
    </p>
  </motion.div>
);

export default MedicinaGeneral;