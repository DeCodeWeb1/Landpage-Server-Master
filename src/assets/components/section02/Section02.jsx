import React from 'react';
import './section02.css'
import '../css/general.css'
import 'react-alice-carousel/lib/alice-carousel.css';



function Section02() {


  return (
    <div className='seccion2 container' id='aboutUs'>

<div className="row my-4 shadow border">
        <div className="lista my-auto p-4">
          <h4 className='mb-3'>SERVICIOS</h4>
          <p>Neumatica integral.</p>
          <p>Electricidad industrial.</p>
          <p>Mecánica en general.</p>
          <p>Montaje de redes de aire comprimido, agua potable, vapor.</p>
          <p>Mantenimiento correctivo y preventivo de equipos industriales.</p>
          <p>Montajes y reparaciones en general.</p>
          <p>Montaje de instrumenos de medición, cableado y canalización.</p>
          <p>Montaje de cañerías de aire comprimido, agua, apor.</p>
          <p>Aislacion de cañerías</p>
        </div>
        <div className="image col-12 col-lg-4 p-0">
          <img className='img-fluid h-100 object-fit-cover' src="/src/assets/img/mantenimiento-asistencia.jpg" alt="" />
        </div>
      </div>
      

      <div className="row my-4 shadow border">
        <div className="image col-12 col-lg-4 p-0">
          <img className='img-fluid h-100 object-fit-cover' src="/src/assets/img/mantenimiento-edilicio.jpg" alt="" />
        </div>
        <div className="lista col text-lg-end my-auto p-4">
          <h4 className='mb-3'>MANTENIMIENTO EDILICIO</h4>
          <p>Sistemas de iluminación y emergencia.</p>
          <p>Sistemas de alarmas y cámaras de seguridad.</p>
          <p>Mantenimiento edilicio (Pintura, Albañileria, Plomeria, Carpinteria, Herreria, Cielorasos).</p>
          <p>Construcciones en seco (durlock y superboard)</p>
        </div>
      </div>


      <div className="row my-4 shadow border">
        <div className="lista col-7 my-auto p-4">
          <h4 className='mb-3'>Division Mecanica Industrial</h4>
          <p>Mantenimiento de compresores de aire.</p>
          <p>Mantenimiento de bombas de aguay fluidos</p>
          <p>Mantenimiento de secadores de aire</p>
        </div>
        <div className="image col-lg-4 col-12 p-0">
          <img className='img-fluid h-100 object-fit-cover' src="/src/assets/img/bombas-de-agua.jpg" alt="" />
        </div>
      </div>

      <div className="row my-4 shadow border">
        <div className="image col-lg-4 col-12 p-0">
          <img className='img-fluid h-100 object-fit-cover' src="/src/assets/img/plc.jpg" alt="" />
        </div>
        <div className="lista col-7 text-lg-end my-auto p-4">
          <h4 className='mb-3'>Division Electrónica</h4>
          <p>Programacion de PLC, HMI, SACADA.</p>
          <p>Servomotores, variadores de velocidad.</p>
          <p>Diseño de sistemas de control con planos de paneles.</p>
          <p>Planos de proceso e instrumentación (P&ID)</p>
          <p>Planos de I/O de campo y de panel, esquemas eléctricos de panel.</p>
          <p>Planos de conexión de red.</p>
          <p>Actualizacion tecnologica de equipos productivos (retrofittubg).</p>
          <p>Reparacion de placas electrónicas</p>
        </div>
      </div>

      <div className="row my-4 shadow border">
        <div className="lista col-7 p-4">
          <h4 className='mb-3'>Division Eléctrica</h4>
          <p>Mantenimiento de morotes eléctricos.</p>
          <p>Arranques estrella triangulo.</p>
          <p>Tableros de control, comando y fuerza.</p>
          <p>Automatización general de procesos</p>
          <p>Montaje de redes eléctricas</p>
          <p>Planimetria eléctrica.</p>
          <p>Ejecución de tareas bajo normativas de seguridad.</p>
        </div>
        <div className="image col-lg-4 col-12 p-0">
          <img className='img-fluid h-100 object-fit-cover' src="/src/assets/img/division-electrica.jpg" alt="" />
        </div>
      </div>

     
    </div>
  )
}

export default Section02