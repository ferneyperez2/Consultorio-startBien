// import React from "react";
// import "./EquipoPreview.css";

// // Importa tus imágenes aquí
// import Doctor1 from "../Component/img/Doctor2.jpg";
// import Doctor2 from "../Component/img/Doctor.jpg";
// import Doctor3 from "../Component/img/Doctora.jpg";
// // import Doctor4 from "../Component/img/Doctor4.jpg";
// // import Doctor5 from "../Component/img/Doctor5.jpg";
// // import Doctor6 from "../Component/img/Doctor6.jpg";

//     import medicinageneral from '../Component/img/Medicina General.png';
//     import Logo from '../Component/img/logo.jpeg';
//     import Pscologia from '../Component/img/Psicología.png';
//     import clinicaAldanaBanner from '../Component/img/Medicina General.png';
//         import { Carousel } from 'react-responsive-carousel';

// const equipo = [
//   {
//     nombre: "Dra. Nancy Aldana",
//     especialidad: "Rehabilitación oral, Odontología general",
//     imagen: Doctor1,
//   },
//   {
//     nombre: "Dr. Juan Cabezas",
//     especialidad: "Cirugía, Implantología, Odontología general",
//     imagen: Doctor2,
//   },
//   {
//     nombre: "Dra. Sofía Köstner",
//     especialidad: "Ortodoncia, Odontología general",
//     imagen: Doctor3,
//   },
//   // {
//   //   nombre: "Dr. Rodrigo Carvajal",
//   //   especialidad: "Ortodoncia",
//   //   imagen: Doctor4,
//   // },
//   // {
//   //   nombre: "Dr. Tomás Cabezas",
//   //   especialidad: "Odontología general",
//   //   imagen: Doctor5,
//   // },
//   // {
//   //   nombre: "Dra. Mónica Maldonado",
//   //   especialidad: "Odontopediatría, Ortodoncia",
//   //   imagen: Doctor6,
//   // },
// ];

// const NuestroEquipo = () => {
//   return (
//     <div className="nuestro-equipo">
//       <div className="encabezado">
//        <Carousel
//                   autoPlay
//                   infiniteLoop
//                   interval={4000}
//                   showThumbs={false}
//                   showStatus={false}
//                   showArrows={false}
//                   transitionTime={700}
//               >
//                   <div className="carousel-image">
//                   <img src={medicinageneral} alt="Banner 1" />
//                   </div>
//                   <div className="carousel-image">
//                   <img src={Logo} alt="Banner 2" />
//                   </div>
//                   <div className="carousel-image">
//                   <img src={Pscologia} alt="Banner 3" />
//                   </div>
//               </Carousel>
//         <h2>Nuestro equipo</h2>
//         <p>
//           Somos profesionales con más de 30 años de trayectoria. Nos preocupamos en entregar un servicio cercano, cordial y familiar. Brindamos una odontología integral, preocupándonos de la totalidad de los problemas que aquejan al paciente.
//         </p>
//       </div>
//       {/* imagenes  */}


//       <div className="grid-equipo">
//         {equipo.map((persona, index) => (
//           <div key={index} className="card-equipo">
//             <img src={persona.imagen} alt={persona.nombre} />
//             <div className="info">
//               <h4>{persona.nombre}</h4>
//               <p>{persona.especialidad}</p>
//               <button className="btn-leer-mas">Leer más</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NuestroEquipo;
