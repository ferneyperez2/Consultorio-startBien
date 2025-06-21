import React from "react";
import { motion } from "framer-motion";
import { FaHands } from "react-icons/fa";
import styles from "./Especialidad.module.css";

const TerapiaOcupacional = () => (
  <motion.div
    className={styles.container}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h1 className={styles.title}>
      <FaHands className={styles.icon} /> Terapia Ocupacional
    </h1>
    <p className={styles.description}>
      La terapia ocupacional promueve la independencia en las actividades diarias, ayudando a personas con discapacidad o dificultades físicas, cognitivas o sensoriales.
    </p>
  </motion.div>
);

export default TerapiaOcupacional;