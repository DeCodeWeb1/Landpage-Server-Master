import React from 'react';
import '../css/general.css'




function Section02() {
  
  return (
    <div className='seccion2 container-fluid p-4 text-white' id='seccionDos'>
      <div className="container-img row row-cols-lg-3 row-cols-1 justify-content-center gap-5">
        <figure className='col col-lg-3'>
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
        </figure>
        
      </div>
      <div className="container-inf container pt-4">
        <h2 className='text-center my-4'>Que trabajos Hacemos?</h2>
        <ul className='gap-4 auto-column servicios'>
          <li>Programación de PLC, HMI, SACADA</li>
          <li>Servmotores, variadoresde velocidad</li>
          <li>Diseños de sistemas de control con planos de paneles.</li>
          <li>Planos de proceso e instrumentacion (P&ID).</li>
          <li>Planos de I/O de campo y de panel, esquemas electricos de panel.</li>
          <li>Planos de conexiión de red.</li>
          <li>Actualización de red.</li>
          <li>Actalización tecnológica de equipos productivos (retrofitting).</li>
          <li>Reparacion de placas electrónicas.</li>
        </ul>
      </div>
    </div>
  )
}

export default Section02