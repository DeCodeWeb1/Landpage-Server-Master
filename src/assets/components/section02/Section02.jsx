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
    <div className="row text-dark border col-lg-10 mx-auto">

      <img className='img-fluid col-lg-8' src="src\assets\img\mantenimiento-asistencia.jpg" onDragStart={handleDragStart} role="presentation" />
      <div className='col-lg-4 mt-1 my-lg-auto text-center'>
        <p className='h1 m-0 mt-2'>****</p>
        <p className='fs-3'>Detrás de nuestros técnicos hay un potente equipo de profesionales para reparar el componente averiado. Taller propio con bancos de pruebas. Para saber más, consulta la sección de Reparaciones hidráulicas</p>
        <p className='h1 m-0'>****</p>
      </div>
    </div>,
    <div className="row text-dark border  col-lg-10 mx-auto">

      <img className='img-fluid col-lg-8' src="src\assets\img\maquina_azul.png" onDragStart={handleDragStart} role="presentation" />
      <div className='col-lg-4 mt-1 my-lg-auto text-center'>
        <p className='h1 text-center m-0 mt-2'>****</p>
        <p className='fs-3 '>Si el componente no es reparable, podemos suministrar rápidamente el repuesto para que puedas volver a producir cuanto antes. Echa un vistazo a nuestra sección de Materiales y repuestos y descubre nuestro catálogo</p>
        <p className='h1 text-center m-0'>****</p>
      </div>
    </div>,
    <div className="row  text-dark border col-lg-10 mx-auto">

      <img className='img-fluid col-lg-8' src="src\assets\img\ZE1_1461.jpg" onDragStart={handleDragStart} role="presentation" />
      <div className='col-lg-4 mt-1 my-lg-auto text-center'>
        <p className='h1 text-center m-0 mt-2'>****</p>
        <p className='fs-3 '>Y ahora que tu máquina ya funciona, seguro que quieres que no vuelva a pasar. Nuestro departamento de ingeniería te ayudará a mejorar tus máquinas o los procesos de mantenimiento hidráulico para que tus equipos sólo paren cuando tú quieres.</p>
        <p className='h1 text-center m-0'>****</p>
      </div>
    </div>
  ];


  return (
    <div className='seccion2 container-fluid' id='seccionDos'>

      <div className="container-img">
        <AliceCarousel
          mouseTracking
          items={items}
          keyboardNavigation
          responsive={responsive}
          autoPlay
          infinite
          autoPlayInterval={9000}
          disableButtonsControls
          animationDuration={600} />
      </div>

      <div className="container-inf row mx-auto d-flex justify-content-evenly mb-4 p-4">
        <div className='col-lg-6 col-12 '>
          <h2 className=' mt-4 ms-4'>Que trabajos Hacemos?</h2>
          <ul className='servicios fs-5'>
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

        <img className='img-fluid col-lg-3 col-8 ' src="src\assets\img\mantenimiento.png" alt="" />
      </div>
    </div>
  )
}

export default Section02