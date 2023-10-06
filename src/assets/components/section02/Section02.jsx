import React from 'react';
import './section02.css'
import '../css/general.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import divElectrica from '../../img/division-electrica.jpg'
import divMecanica from '../../img/bombas-de-agua.jpg'
import manteEdilicio from '../../img/mantenimiento-edilicio.jpg'
import manteAsistencia from '../../img/mantenimiento-asistencia.jpg'
import plc from '../../img/plc.jpg'



function Section02() {


  return (
    <div className='seccion2 container-fluid col-lg-10' id='aboutUs' >

      <div className="row" data-aos="fade-up">
        <div className="lista col my-auto p-4 fs-5">
          <h3 className='mb-3 text-center text-lg-start'>SERVICIOS</h3>
          <ul>
            <li>Neumática integral.</li>
            <li>Electricidad industrial.</li>        <li>Mecánica en general.</li>
            <li>Montaje de redes de aire comprimido, agua potable, vapor.</li>
            <li>Mantenimiento correctivo y preventivo de equipos industriales.</li>
            <li>Montajes y reparaciones en general.</li>
            <li>Montaje de instrumentos de medición, cableado y canalización.</li>
            <li>Montaje de cañerías de aire comprimido, agua, vapor.</li>
            <li>Aislación de cañerías.</li>
          </ul>

        </div>
        <div className="image col-12 m-auto col-lg-4 p-0">
          <img className='img-fluid h-100 object-fit-cover' src={manteAsistencia} alt="" />
        </div>
      </div>

      <hr className='col-9' />

      <div className="row my-4" data-aos="fade-up">
        <div className="image col-12 col-lg-4 p-0">
          <img className='img-fluid h-100 object-fit-cover' src={manteEdilicio} alt="" />
        </div>
        <div className="lista col-lg-5 ms-auto my-auto p-4 fs-5">
          <h3 className='mb-3 text-center text-lg-start'>MANTENIMIENTO EDILICIO</h3>
          <ul>
            <li>Sistemas de iluminación y emergencia.</li>
            <li>Sistemas de alarmas y cámaras de seguridad.</li>
            <li>Mantenimiento edilicio (Pintura, Albañilería, Plomería,  Carpintería, Herrería, Cielorasos).</li>
            <li>Construcciones en seco (durlock y superboard).</li>
          </ul>

        </div>
      </div>

      <hr className='col-9' />

      <div className="row my-4" data-aos="fade-up">
        <div className="lista col my-auto p-4 fs-5">
          <h3 className='mb-3 text-center text-lg-start'>División Mecánica Industrial</h3>
          <ul>
            <li>Mantenimiento de compresores de aire.</li>
            <li>Mantenimiento de bombas de agua y fluidos.</li>
            <li>Mantenimiento de secadores de aire.</li>
          </ul>

        </div>
        <div className="image col-lg-4 col-12 p-0">
          <img className='img-fluid h-100 object-fit-cover' src={divMecanica} alt="" />
        </div>
      </div>

      <hr className='col-9' />

      <div className="row my-4" data-aos="fade-up">
        <div className="image col-lg-4 col-12 p-0">
          <img className='img-fluid h-100 object-fit-cover' src={plc} alt="" />
        </div>
        <div className="lista col-lg-5 ms-auto my-auto p-4 fs-5">
          <h3 className='mb-3 text-center text-lg-start'>División Electrónica</h3>
          <ul>
            <li>Programación de PLC, HMI, SACADA.</li>
            <li>Servomotores, variadores de velocidad.</li>
            <li>Diseño de sistemas de control con planos de paneles.</li>
            <li>Planos de proceso e instrumentación (P&ID).</li>
            <li>Planos de I/O de campo y de panel, esquemas eléctricos de panel.</li>
            <li>Planos de conexión de red.</li>
            <li>Actualizacion tecnológica de equipos productivos (retrofittubg).</li>
            <li>Reparación de placas electrónicas.</li>
          </ul>

        </div>
      </div>

      <hr className='col-9' />


      <div className="row my-4" data-aos="fade-up">
        <div className="lista col p-4 my-auto fs-5">
          <h3 className='mb-3 text-center text-lg-start'>División Eléctrica</h3>
          <ul>
            <li>Mantenimiento de morotes eléctricos.</li>
            <li>Arranques estrella triangulo.</li>
            <li>Tableros de control, comando y fuerza.</li>
            <li>Automatización general de procesos.</li>
            <li>Montaje de redes eléctricas.</li>
            <li>Planimetría eléctrica.</li>
            <li>Ejecución de tareas bajo normativas de seguridad.</li>
          </ul>

        </div>
        <div className="image col-lg-4 col-12 p-0">
          <img className='img-fluid h-100 object-fit-cover' src={divElectrica} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Section02