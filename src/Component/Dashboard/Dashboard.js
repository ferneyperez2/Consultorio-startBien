// import React from 'react';
// // import './Dashboard.css';
// import ImageCarousel from './ImageCarousel';
// // import ServiceOverview from './ServiceOverview';
// // import HorarioDisplay from '../Common/HorarioDisplay';


// const Dashboard = () => {
//     // Aquí podrías obtener datos dinámicos para el carrusel y la overview de servicios
//     const carouselImages = [
//         // Array de URLs de imágenes o datos para el carrusel
//         '/images/carousel1.jpg',
//         '/images/carousel2.jpg',
//         // ...
//     ];

//     const featuredServices = [
//         // Array de servicios destacados (podría venir de una API)
//         { id: 'fonoaudiologia', name: 'Fonoaudiología', description: 'Descripción breve...' },
//         { id: 'psicologia', name: 'Psicología', description: 'Descripción breve...' },
//         // ...
//     ];

//     return (
//         <div className="dashboard-container">
//             <section className="hero">
//                 {/* Logo grande aquí */}
//                 <img src="/images/logo-large.png" alt="Logo StartBien" className="logo-large" />
//                 <h1>Bienvenido a StartBien</h1>
//                 <p>Salud, belleza y bienestar a tu alcance.</p>
//                 {/* Posible botón de llamada a la acción */}
//             </section>

//             <section className="carousel-section">
//                 <h2>Nuestras Imágenes</h2>
//                 <ImageCarousel images={carouselImages} />
//             </section>
// {/* 
//             {/* <section className="services-overview">
//                 <h2>Servicios Destacados</h2>
//                 <div className="services-grid">
//                     {featuredServices.map(service => (
//                         <ServiceOverview key={service.id} service={service} />
//                     ))}
//                 </div>
//                 <a href="/services" className="view-all-services">Ver todos los servicios</a>
//             </section>

//             <section className="contact-info- مختصر">
//                 <h2>Contacto Rápido</h2>
//                 <ContactInfo مختصر mostrarInfo={true} /> {/* O podrías extraer solo la información necesaria */}
//             </section>

//             <section className="horario-section">
//                 <h2>Nuestro Horario</h2>
//                 <HorarioDisplay />
//                   */}
//             </section> 
//         </div>
//     );
// };

// export default Dashboard;