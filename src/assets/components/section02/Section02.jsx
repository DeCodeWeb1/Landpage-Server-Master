import React from 'react';
import './section02.css'
import '../css/general.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import divElectrica from '../../img/division-electrica.jpg'
import divMecanica from '../../img/bombas-de-agua2.jpg'
import manteEdilicio from '../../img/mantenimiento-edilicio2.jpg'
import manteAsistencia from '../../img/mantenimiento-asistencia2.jpg'
import plc from '../../img/plc2.jpg'



function Section02() {


  return (
    <div className='seccion2 container-fluid' id='aboutUs' >

      <div className="container-fluid d-flex align-items-center mb-4" >
        <h5 className='about m-0 text-secondary'>¿QUÉ ES LO QUE HACEMOS?</h5>
        <div className='line rounded  '></div>
      </div>

      <div className="row justify-content-center mb-4 gap-5">


        <div className=" col-lg-5 mx-1 shadow border p-2" data-aos="fade-up">
          <h3 className=' h2 titulo text-center text-white' style={{ backgroundColor: 'brown' }}>SERVICIOS</h3>
          <div className="col mt-4">
            <ul>
              <li >Neumática integral.</li>
              <li >Electricidad industrial.</li>
              <li>Mecánica en general.</li>
              <li >Montaje de redes de aire comprimido, agua potable, vapor.</li>
              <li >Mantenimiento correctivo y preventivo de equipos industriales.</li>
              <li >Montajes y reparaciones en general.</li>
              <li >Montaje de instrumentos de medición, cableado y canalización.</li>
              <li >Montaje de cañerías de aire comprimido, agua, vapor.</li>
              <li >Aislación de cañerías.</li>
            </ul>

          </div>
          <div className="col-11 my-3 mx-auto">
            <img className='img-fluid object-fit-cover' src={manteAsistencia} alt="" />
          </div>
        </div>

        <div className="col-lg-5 shadow border p-2" data-aos="fade-right">
          <h3 className='h1 titulo text-center text-white' style={{ backgroundColor: 'brown' }}>División Electrónica</h3>
          <div className="mx-auto col-11 my-4">
            <img className='img-fluid object-fit-cover' src={plc} alt="" />
          </div>
          <div className="mt-5">
            <ul>
              <li >Programación de PLC, HMI, SACADA.</li>
              <li >Servomotores, variadores de velocidad.</li>
              <li >Diseño de sistemas de control con planos de paneles.</li>
              <li >Planos de proceso e instrumentación (P&ID).</li>
              <li >Planos de I/O de campo y de panel, esquemas eléctricos de panel.</li>
              <li >Planos de conexión de red.</li>
              <li >Actualizacion tecnológica de equipos productivos (retrofittubg).</li>
              <li >Reparación de placas electrónicas.</li>
            </ul>

          </div>
        </div>


      </div>




      <div className="row justify-content-center">




        <div className="col-lg-4">

          <div className="shadow border p-2 mb-auto" data-aos="fade-down">
            <h3 className=' h1 titulo text-center text-white' style={{ backgroundColor: 'brown' }}>División Mecánica Industrial</h3>
            <div className=" mt-2">
              <ul>
                <li >Mantenimiento de compresores de aire.</li>
                <li >Mantenimiento de bombas de agua y fluidos.</li>
                <li >Mantenimiento de secadores de aire.</li>
              </ul>

            </div>
            {/* <div className="">
              <img className='img-fluid object-fit-cover' src={divMecanica} alt="" />
            </div> */}
          </div>

          <div className="shadow border p-2" data-aos="fade-up">
            <h3 className='h2 titulo text-center text-white' style={{ backgroundColor: 'brown' }}>MANTENIMIENTO EDILICIO</h3>
            <div className="">
              <img className='img-fluid object-fit-cover' src={manteEdilicio} alt="" />
            </div>
            <div className="mt-2">
              <ul>
                <li >Sistemas de iluminación y emergencia.</li>
                <li>Sistemas de alarmas y cámaras de seguridad.</li>
                <li >Mantenimiento edilicio (Pintura, Albañilería, Plomería,  Carpintería, Herrería, Cielorasos).</li>
                <li>Construcciones en seco (durlock y superboard).</li>
              </ul>

            </div>
          </div>

        </div>



        <div className="col-lg-4 shadow border p-2" data-aos="fade-left">
          <h3 className='h1 text-center titulo text-white' style={{ backgroundColor: 'brown' }}>División Eléctrica</h3>
          <div className="mt-2">
            <ul>
              <li >Mantenimiento de morotes eléctricos.</li>
              <li >Arranques estrella triangulo.</li>
              <li >Tableros de control, comando y fuerza.</li>
              <li >Automatización general de procesos.</li>
              <li >Montaje de redes eléctricas.</li>
              <li >Planimetría eléctrica.</li>
              <li >Ejecución de tareas bajo normativas de seguridad.</li>
            </ul>

          </div>
          <div className="">
            <img className='img-fluid object-fit-cover' src={divElectrica} alt="" />
          </div>
        </div>

      </div>












    </div>
  )
}

export default Section02