    import React from 'react';
    import { Carousel } from 'react-responsive-carousel';
    import 'react-responsive-carousel/lib/styles/carousel.min.css';
    import './HomeBanner.css';
    // import EspecialidadesHome from './EspecialidadesHome';
    import EspecialidadesPreview from './EspecialidadesPreview';
    import EquipoPreview from './EquipoPreview';


    import medicinageneral from '../Component/img/Medicina General.png';
    import Logo from '../Component/img/logo.jpeg';
    import Pscologia from '../Component/img/Psicología.png';
    import clinicaAldanaBanner from '../Component/img/Medicina General.png'; // nueva imagen

    const HomeBanner = () => {
    return (
        <section className="banner-container">
        <Carousel
            autoPlay
            infiniteLoop
            interval={4000}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            transitionTime={700}
        >
            <div className="carousel-image">
            <img src={medicinageneral} alt="Banner 1" />
            </div>
            <div className="carousel-image">
            <img src={Logo} alt="Banner 2" />
            </div>
            <div className="carousel-image">
            <img src={Pscologia} alt="Banner 3" />
            </div>
        </Carousel>

        {/* <div className="overlay-text">
            <h2>Nos preocupamos <br /> de tu salud integral</h2>
        </div> */}

            {/* INFORMACIÓN */}
        <div className="info-section">
            <div className="info-box">
            <h3>⏰ Horario de atención</h3>
            <p>Lunes a  viernes : 07:00 A.M - 05:00 P.M.</p>
            <p>Viernes: 9:00 - 17:00 hrs.</p>
            </div>
            <div className="info-box">
            <h3>📞 Contacto</h3>
            <p>Teléfono: 3122845333</p>
            <p>Whatsapp: +57 3122845333</p>
            </div>
            <div className="info-box">
            <h3>📍 Direccion</h3>
            <p>Cl. 13 #3-39, Montelibano, Montelíbano, Córdoba</p>
            </div>
        </div>

        {/* NUEVA SECCIÓN */}
        <div className="why-choose-section">
            <div className="why-choose-text">
            <h2>¿Por qué elegir <br /> <span> Consultorio Starbien</span>?</h2>
            <p>
               el consultorio afue fundada por la Dra. villorina en el año 2004,
                con el propósito de entregar un servicio odontológico integral y de
                excelencia, viendo a nuestros pacientes como personas únicas que
                necesitan tratamientos personalizados, abarcando desde la
                prevención hasta tratamientos de mayor complejidad, siempre
                aplicando un enfoque multidisciplinario.
            </p>
            <button>RESERVA TU HORA</button>
            </div>
            <div className="why-choose-img">
            <img src={clinicaAldanaBanner} alt="Clínica Aldana" />
            </div>
        </div>
        {/* especialidades  */}
        <div  className='Especialides'> 

<EspecialidadesPreview/>

        </div>

        {/*  Componente de  nuestro equipo  */}

             <div  className='Especialides'> 

<EquipoPreview/>
        </div>
        

    
        </section>
    );
    };

    export default HomeBanner;
