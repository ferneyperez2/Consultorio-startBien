import React, { useState, useEffect } from "react";
import "./appointment.css"; // Asegúrate de tener este archivo CSS

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

  // Guardar en localStorage cada vez que cambia un campo
  useEffect(() => {
    localStorage.setItem("service", service);
    localStorage.setItem("date", date);
    localStorage.setItem("time", time);
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("identi", identi);
    localStorage.setItem("Eps", Eps);
    localStorage.setItem("Regimen", Regimen);
  }, [service, date, time, name, phone,identi,Eps,Regimen]);

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
    if (!service || !date || !time || !name || !phone || !identi || !Eps || !Regimen) {
      alert("Por favor completa todos los campos.");
      return;
    }else{
      alert(" nos comunicaremos por whatsapp");
    };

    const message = `Hola, quiero agendar una cita mi nombre es: ${name},
    mi identificacion es : ${identi},
    mi eps es: ${Eps}, 
    mi regimen es: ${Regimen},
 con la Especialidad   ${service} ,
  el dia  ${date} a las ${time},
   mi número es ${phone}.`;
  //  este es el numero de la cita de whatsApp 
   const whatsappURL = `https://wa.me/573122845333?text=${encodeURIComponent(message)}`;

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
          <label>Nombre - apellido:</label>
          <input type="text" placeholder="Tu nombre y apellido " value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        
        {/* identificacion */}

        <div className="form-group">
          <label>Identificacion:</label>
          <input type="number" placeholder="Tu identificacion" value={identi} onChange={(e) => setIdenti(e.target.value)} />
        </div>

        {/* Eps */}

        <div className="form-group">
          <label>EPS:</label>
          <select value={Eps} onChange={(e) => setEps(e.target.value)}>
            <option value="">Selecciona Tu Eps</option>
            <option value="Fonoaudiologia">NUEVA EPS.</option>
            <option value="Psicologia">SALUD TOTAL.</option>
            <option value="Terapia Fisica">COOSALUD.</option>
            <option value="Terapia Respiratoria">CAPITAL SALUD.</option>
            <option value="M edicina General">CAJACOPI.</option>
            <option value="Terapia  Ocupacional">WAYU.</option>
            <option value="">ALIANSALUD.</option>
            <option value="">MUTUALSER.</option>
            <option value="">MAGISTERIO.</option>
            <option value="">PARTICULAR.</option>
            <option value="">CAJA COPI.</option>
            <option value="">SAVIA SALUD.</option>
            <option value="">SANITAS</option>
          </select>
        </div>
{/* Regimen */}
        <div className="form-group">
          <label>Regimen:</label>
          <select value={Regimen} onChange={(e) => setRegimen(e.target.value)}>
            <option value="">Selecciona Tu Regimen</option>
            <option value="Fonoaudiologia">REGIMEN CONTRIBUTIVO CONTIZANTE  </option>
            <option value="Psicologia">REGIMEN SUBSIDIADO</option>
            <option value="Terapia Fisica">REGIMEN CONTRIBUTIVO CONTIZANTE</option>
            <option value="">NO TENGO REGIMEN</option>
       
          </select>
        </div>

{/* Telefono */}
        <div className="form-group">
          <label>Teléfono:</label>
          <input type="tel" placeholder="Tu teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <button type="button" onClick={handleWhatsApp }>Agendar por WhatsApp</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
