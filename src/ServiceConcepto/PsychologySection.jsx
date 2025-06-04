import React from 'react';
import {
  FaBroadcastTower, FaSyringe, FaHotTub, FaFlask,
  FaDumbbell, FaBiking, FaSatelliteDish, FaCircle
} from 'react-icons/fa';

const resources = [
  { icon: <FaBroadcastTower size={40} />, label: 'Equipos de electroterapia' },
  { icon: <FaSyringe size={40} />, label: 'Ultrasonido' },
  { icon: <FaHotTub size={40} />, label: 'Compresas húmedo-calientes' },
  { icon: <FaFlask size={40} />, label: 'Hidrocolector' },
  { icon: <FaDumbbell size={40} />, label: 'Mecanoterapia' },
  { icon: <FaBiking size={40} />, label: 'Spinning' },
  { icon: <FaSatelliteDish size={40} />, label: 'Pilates Matt' },
  { icon: <FaCircle size={40} />, label: 'Balones de Bobath' },
];

const PhysicalResources = () => {
  return (
    <section style={{ padding: '4rem 1rem', backgroundColor: '#fff', textAlign: 'center' }}>
      <h2 style={{ color: '#2196f3', fontSize: '2.5rem', marginBottom: '1rem' }}>
        Nuestros Recursos Físicos
      </h2>
      <hr style={{ width: '80%', margin: '0 auto 2.5rem auto', border: 'none', height: '1px', backgroundColor: '#ccc' }} />
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2.5rem',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {resources.map((item, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              color: '#2196f3',
              marginBottom: '0.8rem',
            }}>
              {item.icon}
            </div>
            <span style={{ fontSize: '1rem', color: '#333' }}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhysicalResources;
