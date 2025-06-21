import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaPhone, FaIdCard, FaCalendarAlt, FaClock, FaWhatsapp, FaHospital, FaListAlt } from "react-icons/fa";
import "./appointment.css";

const AppointmentForm = () => {
  const [service, setService] = useState(localStorage.getItem("service") || "");
  const [date, setDate] = useState(localStorage.getItem("date") || "");
  const [time, setTime] = useState(localStorage.getItem("time") || "");
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [phone, setPhone] = useState(localStorage.getItem("phone") || "");
  const [identi, setIdenti] = useState(localStorage.getItem("identi") || "");
  const [Eps, setEps] = useState(localStorage.getItem("Eps") || "");
  const [Regimen, setRegimen] = useState(localStorage.getItem("Regimen") || "");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("service", service);
    localStorage.setItem("date", date);
    localStorage.setItem("time", time);
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("identi", identi);
    localStorage.setItem("Eps", Eps);
    localStorage.setItem("Regimen", Regimen);
  }, [service, date, time, name, phone, identi, Eps, Regimen]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split("T")[0];
    if (selectedDate < today) {
      setError("No puedes agendar citas en el pasado.");
      setDate("");
    } else {
      setError("");
      setDate(selectedDate);
    }
  };

  const handleWhatsApp = () => {
    if (!service || !date || !time || !name || !phone || !identi || !Eps || !Regimen) {
      setError("Por favor completa todos los campos.");
      return;
    } else {
      setError("");
    }
    const message = `Hola, quiero agendar una cita mi nombre es: ${name},
    mi identificacion es : ${identi},
    mi eps es: ${Eps}, 
    mi regimen es: ${Regimen},
    con la Especialidad ${service},
    el dia ${date} a las ${time},
    mi número es ${phone}.`;
    const whatsappURL = `https://wa.me/573122845333?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <motion.div
      className="appointment-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2>
        <FaListAlt style={{ color: "#1976d2", marginRight: 8 }} />
        Agendar Cita
      </h2>
      <form className="appointment-form" autoComplete="off">
        <div className="form-group">
          <label><FaListAlt /> Especialidad:</label>
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Selecciona una Especialidad</option>
            <option value="Fonoaudiologia">Fonoaudiología</option>
            <option value="Psicologia">Psicología</option>
            <option value="Terapia Fisica">Terapia Física</option>
            <option value="Terapia Respiratoria">Terapia Respiratoria</option>
            <option value="Medicina General">Medicina General</option>
            <option value="Terapia Ocupacional">Terapia Ocupacional</option>
            <option value="Nutricion">Nutricion </option>
                <option value="Estetica Facial">Estetica Facial</option>
                    <option value="Estentica Corporal">Estentica Corporal</option>
          </select>
        </div>

        <div className="form-group">
          <label><FaCalendarAlt /> Fecha:</label>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>

        {/* <div className="form-group">
          <label><FaClock /> Hora:</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div> */}

        <div className="form-group">
          <label><FaUser /> Nombre - apellido:</label>
          <input type="text" placeholder="Tu nombre y apellido" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label><FaIdCard /> Identificación:</label>
          <input type="number" placeholder="Tu identificación" value={identi} onChange={(e) => setIdenti(e.target.value)} />
        </div>

        <div className="form-group">
          <label><FaHospital /> EPS:</label>
          <select value={Eps} onChange={(e) => setEps(e.target.value)}>
            <option value="">Selecciona Tu EPS</option>
            <option value="NUEVA EPS">NUEVA EPS</option>
            <option value="SALUD TOTAL">SALUD TOTAL</option>
            <option value="COOSALUD">COOSALUD</option>
            <option value="CAPITAL SALUD">CAPITAL SALUD</option>
            <option value="CAJACOPI">CAJACOPI</option>
            <option value="WAYU">WAYU</option>
            <option value="ALIANSALUD">ALIANSALUD</option>
            <option value="MUTUALSER">MUTUALSER</option>
            <option value="MAGISTERIO">MAGISTERIO</option>
            <option value="PARTICULAR">PARTICULAR</option>
            <option value="SAVIA SALUD">SAVIA SALUD</option>
            <option value="SANITAS">SANITAS</option>
          </select>
        </div>

        <div className="form-group">
          <label><FaListAlt /> Régimen:</label>
          <select value={Regimen} onChange={(e) => setRegimen(e.target.value)}>
            <option value="">Selecciona Tu Régimen</option>
            <option value="REGIMEN CONTRIBUTIVO CONTIZANTE">RÉGIMEN CONTRIBUTIVO COTIZANTE</option>
            <option value="REGIMEN SUBSIDIADO">RÉGIMEN SUBSIDIADO</option>
            <option value="NO TENGO REGIMEN">NO TENGO RÉGIMEN</option>
          </select>
        </div>

        <div className="form-group">
          <label><FaPhone /> Teléfono:</label>
          <input type="tel" placeholder="Tu teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        {error && <p className="error-text">{error}</p>}

        <button type="button" onClick={handleWhatsApp}>
          <FaWhatsapp style={{ marginRight: 8, fontSize: 20 }} />
          Agendar por WhatsApp
        </button>
      </form>
    </motion.div>
  );
};

export default AppointmentForm;