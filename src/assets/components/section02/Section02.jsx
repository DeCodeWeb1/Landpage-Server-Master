import React from 'react';
import './section02.css'
import '../css/general.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const handleDragStart = (e) => e.preventDefault();

function Section02() {

  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 1,
      itemsFit: 'contain',
    }
  }

  const items = [
    <div className="div d-flex col-8 border border-light border-5  bg-dark mx-auto">
      <p className='fs-3 my-auto p-4'>Detrás de nuestros técnicos hay un potente equipo de profesionales para reparar el componente averiado. Taller propio con bancos de pruebas. Para saber más, consulta la sección de Reparaciones hidráulicas</p>
      <img className='img w-50' src="src\assets\img\mantenimiento-asistencia.jpg" onDragStart={handleDragStart} role="presentation" />
    </div>,
    <div className="div d-flex col-8 border border-light border-5  bg-dark mx-auto">
      <p className='fs-3 my-auto p-4'>Si el componente no es reparable, podemos suministrar rápidamente el repuesto para que puedas volver a producir cuanto antes. Echa un vistazo a nuestra sección de Materiales y repuestos y descubre nuestro catálogo</p>
      <img className='img w-50' src="src\assets\img\maquina_azul.png" onDragStart={handleDragStart} role="presentation" />
    </div>,
    <div className="div d-flex col-8 border border-light border-5  bg-dark mx-auto">
      <p className='fs-3 my-auto p-4'>Y ahora que tu máquina ya funciona, seguro que quieres que no vuelva a pasar. Nuestro departamento de ingeniería te ayudará a mejorar tus máquinas o los procesos de mantenimiento hidráulico para que tus equipos sólo paren cuando tú quieres.</p>
      <img className='img w-50' src="src\assets\img\ZE1_1461.jpg" onDragStart={handleDragStart} role="presentation" />
    </div>
  ];


  return (
    <div className='seccion2 container-fluid p-4 text-white' id='seccionDos'>
      <div className="container-img row row-cols-lg-3 row-cols-1 justify-content-center gap-5">
        {/* <figure className='col col-lg-3'>
          <img className='img-fluid border w-100' src="src\assets\img\mantenimiento-asistencia.jpg" alt="" />
          <figcaption className='mt-3'>Detrás de nuestros técnicos hay un potente equipo de profesionales para reparar el componente averiado. Taller propio con bancos de pruebas. Para saber más, consulta la sección de Reparaciones hidráulicas</figcaption>
        </figure>

        <figure className='col col-lg-3'>
          <img className='img-fluid border w-100' src="src\assets\img\maquina_azul.png" alt="" />
          <figcaption className='mt-3'>Si el componente no es reparable, podemos suministrar rápidamente el repuesto para que puedas volver a producir cuanto antes. Echa un vistazo a nuestra sección de Materiales y repuestos y descubre nuestro catálogo</figcaption>
        </figure>

        <figure className='col col-lg-3'>
          <img className='img-fluid border w-100' src="src\assets\img\ZE1_1461.jpg" alt="" />
          <figcaption className='mt-3'>Y ahora que tu máquina ya funciona, seguro que quieres que no vuelva a pasar. Nuestro departamento de ingeniería te ayudará a mejorar tus máquinas o los procesos de mantenimiento hidráulico para que tus equipos sólo paren cuando tú quieres.</figcaption>
        </figure> */}

        <AliceCarousel mouseTracking items={items} responsive={responsive} autoPlay infinite autoPlayInterval={15000} />



      </div>
      <div className="container-inf container">
        <h2 className='text-center my-4'>Que trabajos Hacemos?</h2>
        <ul className='gap-4 auto-column servicios fs-5'>
          <li>Programación de PLC, HMI, SACADA</li>
          <li>Servmotores, variadoresde velocidad</li>
          <li>Diseños de sistemas de control con planos de paneles.</li>
          <li>Planos de proceso e instrumentacion (P&ID).</li>
          <li>Planos de I/O de campo y de panel, esquemas electricos de panel.</li>
          <li>Planos de conexión de red.</li>
          <li>Actualización de red.</li>
          <li>Actalización tecnológica de equipos productivos (retrofitting).</li>
          <li>Reparacion de placas electrónicas.</li>
        </ul>
      </div>
    </div>
  )
}

export default Section02