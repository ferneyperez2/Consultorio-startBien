import React from "react";
  import { useState } from "react";
 

  
  const Citas = () => { 

    const fecha = new Date();
    console.log(fecha.getDay());
      
      const [name, setName] = useState('');
      const [date, setDate] = useState('');
      const [phone, setPhone] = useState('');
    const  [especialidad, setEspecialidad] = useState('');
      
      
      const handleSubmit = (e) => {



        e.preventDefault();
    
        if (!name || !date || !phone || !especialidad ) {
          alert('Por favor, llena todos los campos.');
          return;
        }else{
          alert(" nos comunicaremos por whatsApp");
        }

        const hora = new Date( "1995-12-25T23:15:30");
        const hours= hora.getHours();

        const message = ` Hola, mi nombre es ${name}. Me gustaría agendar una cita el ${date}, ${hours}Puedes contactarme al   ${phone}.`;
        const whatsappUrl = `https://wa.me/+573122845333?text=${encodeURIComponent(message)}`;
    
        // Redirigir a WhatsApp
        window.open(whatsappUrl, '_blank');
      };

        // Lista de servicios disponibles
  const [services] = useState([
    "Fisioterapia Deportiva",
    "Rehabilitación Postquirúrgica",
    "Masajes Terapéuticos",
    "Terapia Ocupacional",
    "Electroterapia",
  ]);

  // Estado para manejar la opción seleccionada
  const [selectedService, setSelectedService] = useState("");
    
      return (
        <div className="form-container">
          <h1>Agendar Cita</h1>
          <form onSubmit={handleSubmit}>
             
          
            
            
            <div className="select-container">
      <label htmlFor="services">Selecciona un servicio:</label>
      <select
        id="services"
        className="select-input"
        value={selectedService}
        onChange={(e) => setSelectedService(e.target.value)}
      >
        <option value="">-- Seleccione --</option>
        {services.map((service, index) => (
          <option key={index} value={service}>
            {service}
          </option>
        ))}
      </select>
    </div>
            {/* Fecha */}
              <div className="input-group">
            <label>
              Fecha:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
         </div>

            < div className="rred"> 
            
            
            
            
             </div>
 .l             
            
            
{/* Telefono */}
          <div className="input-group">

                 Teléfono:
              <input
           
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ingresa tu teléfono"
              />
       
      </div>

            
            <button type="submit" className="button">Enviar</button>
          </form>
        </div>
      );
  };

  


export default  Citas;