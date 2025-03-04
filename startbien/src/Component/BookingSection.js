import React, { useState, useEffect } from "react";
import "./appointment.css"; // Asegúrate de tener este archivo CSS

const AppointmentForm = () => {
  const [service, setService] = useState(localStorage.getItem("service") || "");
  const [date, setDate] = useState(localStorage.getItem("date") || "");
  const [time, setTime] = useState(localStorage.getItem("time") || "");
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [phone, setPhone] = useState(localStorage.getItem("phone") || "");
  const [error, setError] = useState("");

  // Guardar en localStorage cada vez que cambia un campo
  useEffect(() => {
    localStorage.setItem("service", service);
    localStorage.setItem("date", date);
    localStorage.setItem("time", time);
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
  }, [service, date, time, name, phone]);

  // Validar que la fecha no sea menor a hoy
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split("T")[0]; // Obtener la fecha actual en formato YYYY-MM-DD

    if (selectedDate < today) {
      setError("No puedes agendar citas en el pasado.");
      setDate(""); // Limpiar el campo de fecha si es inválido
    } else {
      setError("");
      setDate(selectedDate);
    }
  };

  const handleWhatsApp = () => {
    if (!service || !date || !time || !name || !phone) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const message = `Hola, quiero agendar una cita para ${service} el ${date} a las ${time}. Mi nombre es ${name} y mi número es ${phone}.`;
    const whatsappURL = `https://wa.me/57${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="appointment-container">
      <h2>Agendar Cita</h2>
      <form className="appointment-form">
        <div className="form-group">
          <label>Especialidad:</label>
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Selecciona una Especialidad</option>
            <option value="Fonoaudiologia">Fonoaudiologia</option>
            <option value="Psicologia">psicologia</option>
            <option value="Terapia Fisica">Terapia Fisica</option>
            <option value="Terapia Respiratoria">Terapia Respiratoria</option>
            <option value="Medicina General">Medicina General</option>
            <option value="Terapia  Ocupacional">Terapia Ocupacional</option>
            <option value="Ortepedia">Ortopedia</option>
          </select>
        </div>

        <div className="form-group">
          <label>Fecha:</label>
          <input type="date" value={date} onChange={handleDateChange} />
          {error && <p className="error-text">{error}</p>}
        </div>

        <div className="form-group">
          <label>Hora:</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Teléfono:</label>
          <input type="tel" placeholder="Tu teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <button type="button" onClick={handleWhatsApp}>Agendar por WhatsApp</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
