import React from 'react';
import { FaChild, FaMicrophoneAlt, FaAssistiveListeningSystems, FaRegSmile } from 'react-icons/fa';

const fonoaItems = [
  { icon: <FaMicrophoneAlt size={40} />, label: 'Terapia del lenguaje' },
  { icon: <FaChild size={40} />, label: 'Desarrollo del habla' },
  { icon: <FaAssistiveListeningSystems size={40} />, label: 'Terapia auditiva' },
  { icon: <FaRegSmile size={40} />, label: 'Deglución y voz' },
];

const Fonoaudiologia = () => {
  return (
    <section style={{ padding: '4rem 1rem', backgroundColor: '#fff', textAlign: 'center' }}>
      <h2 style={{ color: '#2196f3', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
        Servicio de Fonoaudiología
      </h2>
      <p style={{ color: '#555', maxWidth: '700px', margin: '0 auto 2rem auto', fontSize: '1.1rem' }}>
        La fonoaudiología se encarga de la prevención, evaluación, diagnóstico y tratamiento de los trastornos de la comunicación humana, incluyendo lenguaje, habla, voz, audición y funciones orales como la deglución.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        maxWidth: '1100px',
        margin: '2rem auto',
      }}>
        {fonoaItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ color: '#2196f3', marginBottom: '0.8rem' }}>
              {item.icon}
            </div>
            <span style={{ fontSize: '1rem', color: '#333', textAlign: 'center' }}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Imagen */}
      <img
        src="https://cdn.pixabay.com/photo/2020/07/31/07/44/speech-5453263_960_720.jpg"
        alt="Fonoaudiología"
        style={{
          maxWidth: '800px',
          width: '100%',
          borderRadius: '1rem',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          margin: '2rem auto'
        }}
      />

      {/* Video */}
      <div style={{
        marginTop: '3rem',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/dVmu8tQPYjA"
          title="Fonoaudiología explicada"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '1rem', maxWidth: '100%' }}
        />
      </div>
    </section>
  );
};

export default Fonoaudiologia;
