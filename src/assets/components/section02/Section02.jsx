import React from 'react';
import './section02.css'
import '../css/general.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import divElectrica from '../../img/division-electrica.jpg' 
import mentenimiento from '../../img/img-mantenimiento.jpg' 
import divMecanica from '../../img/bombas-de-agua.jpg' 
import manteEdilicio from '../../img/mantenimiento-edilicio.jpg' 
import manteAsistencia from '../../img/mantenimiento-asistencia.jpg' 
import plc from '../../img/plc.jpg' 



function Section02() {


  return (
    <div className='seccion2 container' id='aboutUs'>

      <div className="row my-4 border border-5">
        <div className="lista col my-auto p-4 fs-5">
          <h3 className='mb-3'>SERVICIOS</h3>
          <p>Neumática integral.</p>
          <p>Electricidad industrial.</p>
          <p>Mecánica en general.</p>
          <p>Montaje de redes de aire comprimido, agua potable, vapor.</p>
          <p>Mantenimiento correctivo y preventivo de equipos industriales.</p>
          <p>Montajes y reparaciones en general.</p>
          <p>Montaje de instrumentos de medición, cableado y canalización.</p>
          <p>Montaje de cañerías de aire comprimido, agua, vapor.</p>
          <p>Aislación de cañerías.</p>
        </div>
        <div className="image col-12 col-lg-6 p-0">
          <img className='img-fluid h-100 object-fit-cover' src={manteAsistencia} alt="" />
        </div>
      </div>


      <div className="row my-4 border border-5">
        <div className="image col-12 col-lg-6 p-0">
          <img className='img-fluid h-100 object-fit-cover' src={manteEdilicio} alt="" />
        </div>
        <div className="lista col  my-auto p-4 fs-5">
          <h3 className='mb-3'>MANTENIMIENTO EDILICIO</h3>
          <p>Sistemas de iluminación y emergencia.</p>
          <p>Sistemas de alarmas y cámaras de seguridad.</p>
          <p>Mantenimiento edilicio (Pintura, Albañilería, Plomería, Carpintería, Herrería, Cielorasos).</p>
          <p>Construcciones en seco (durlock y superboard).</p>
        </div>
      </div>


      <div className="row my-4 border border-5">
        <div className="lista col my-auto p-4 fs-5">
          <h3 className='mb-3'>División Mecánica Industrial</h3>
          <p>Mantenimiento de compresores de aire.</p>
          <p>Mantenimiento de bombas de agua y fluidos.</p>
          <p>Mantenimiento de secadores de aire.</p>
        </div>
        <div className="image col-lg-6 col-12 p-0">
          <img className='img-fluid h-100 object-fit-cover' src={divMecanica} alt="" />
        </div>
      </div>

      <div className="row my-4 border border-5">
        <div className="image col-lg-6 col-12 p-0">
          <img className='img-fluid h-100 object-fit-cover' src={plc} alt="" />
        </div>
        <div className="lista col  my-auto p-4 fs-5">
          <h3 className='mb-3'>División Electrónica</h3>
          <p>Programación de PLC, HMI, SACADA.</p>
          <p>Servomotores, variadores de velocidad.</p>
          <p>Diseño de sistemas de control con planos de paneles.</p>
          <p>Planos de proceso e instrumentación (P&ID).</p>
          <p>Planos de I/O de campo y de panel, esquemas eléctricos de panel.</p>
          <p>Planos de conexión de red.</p>
          <p>Actualizacion tecnológica de equipos productivos (retrofittubg).</p>
          <p>Reparación de placas electrónicas.</p>
        </div>
      </div>

      <div className="row my-4 border border-5">
        <div className="lista col p-4 fs-5">
          <h3 className='mb-3 text-decoration-underline'>División Eléctrica</h3>
          <p>Mantenimiento de morotes eléctricos.</p>
          <p>Arranques estrella triangulo.</p>
          <p>Tableros de control, comando y fuerza.</p>
          <p>Automatización general de procesos.</p>
          <p>Montaje de redes eléctricas.</p>
          <p>Planimetría eléctrica.</p>
          <p>Ejecución de tareas bajo normativas de seguridad.</p>
        </div>
        <div className="image col-lg-6 col-12 p-0">
          <img className='img-fluid h-100 object-fit-cover' src={divElectrica} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Section02