import React from "react";
import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";
import styles from "./Especialidad.module.css";

const Psicologia = () => (
  <motion.div
    className={styles.container}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h1 className={styles.title}>
      <FaBrain className={styles.icon} /> Psicología
    </h1>
    <p className={styles.description}>
      Nuestro servicio de psicología brinda apoyo emocional y terapéutico para afrontar dificultades personales, familiares o escolares, promoviendo el bienestar mental.
    </p>
  </motion.div>
);

export default Psicologia;