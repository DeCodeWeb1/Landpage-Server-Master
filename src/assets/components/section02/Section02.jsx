import React from 'react';
import './section02.css'
import '../css/general.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import divElectrica from '../../img/division-electrica.jpg'
import manteEdilicio from '../../img/mantenimiento-edilicio2.jpg'
import manteAsistencia from '../../img/mantenimiento-asistencia2.jpg'
import plc from '../../img/plc2.jpg'
import comprInd from '../../img/compresores-industriales-lubricacion-2.png'
import { BsFillWrenchAdjustableCircleFill, BsFillBuildingsFill } from "react-icons/bs";
import { BiChevronsRight, BiCheck } from "react-icons/bi";
import { AiFillSetting, AiFillThunderbolt, AiFillTool, AiFillApi } from "react-icons/ai";

function Section02() {


  return (
    <section className='seccion2 container-fluid' id='aboutUs' >

      <div className="container-fluid d-flex align-items-center mb-4" >
        <h5 className='about m-0 text-secondary'>¿QUÉ ES LO QUE HACEMOS?</h5>
        <div className='line rounded'></div>
      </div>

      <div className="row justify-content-center mb-4 gap-4">

        <article className=" col-lg-5 mx-1 shadow border p-2" data-aos="fade-up" >
          <h3 className=' h2 titulo ms-3 mt-2' style={{ color: '#9B2D5B' }}> <AiFillSetting className='me-2' /> SERVICIOS</h3>
          <div className="col mt-4">
            <ul className='list-unstyled ms-3'>
              <li><BiChevronsRight color='#3F6085' size={25} /> Neumática integral.</li>
              <li><BiChevronsRight color='#3F6085' size={25} /> Electricidad industrial.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Mecánica en general.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Mantenimiento correctivo y preventivo de equipos industriales.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Montajes y reparaciones en general.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Montaje de instrumentos de medición, cableado y canalización.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Montaje de cañerías de aire comprimido, agua, vapor.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Aislación de cañerías.</li>
            </ul>
          </div>
          <figure className="col-11 my-3 mx-auto border border-3 border-black rounded">
            <img className='img-fluid object-fit-cover rounded' src={manteAsistencia} alt="imagen ilustrativa: hombre realizando mantenimiento de maquina hidrulica" />
          </figure>
        </article>

        <article className="col-lg-5 shadow border p-2" data-aos="fade-up">
          <h3 className=' h2 titulo ms-3 mt-2' style={{ color: '#9B2D5B' }}> <AiFillApi className='me-2' /> DIVISIÓN ELECTRÓNICA</h3>
          <figure className="mx-auto col-11 my-4 border border-3 border-black rounded">
            <img className='img-fluid object-fit-cover rounded' src={plc} alt="imágen ilustrativa: laptop conectada a una maquina en reparación" />
          </figure>
          <div className="mt-5">
            <ul className='list-unstyled ms-3'>
              <li><BiChevronsRight color='#3F6085' size={25} />Programación de PLC, HMI, SCADA.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Servomotores, variadores de velocidad.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Diseño de sistemas de control con planos de paneles.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Planos de proceso e instrumentación (P&ID).</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Planos de I/O de campo y de panel, esquemas eléctricos de panel.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Planos de conexión de red.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Actualizacion tecnológica de equipos productivos (retrofittubg).</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Reparación de placas electrónicas.</li>
            </ul>
          </div>
        </article>


      </div>




      <div className="row justify-content-center mb-4 gap-4">


        <div className="col-lg-5 d-flex flex-column justify-content-between p-0" >

          <article className="shadow border p-2 mb-auto" data-aos="fade-up">
            <h3 className=' h2 titulo ms-3 mt-2' style={{ color: '#9B2D5B' }}> <BsFillWrenchAdjustableCircleFill className='me-2' /> DIVISIÓN MECÁNICA INDUSTRIAL</h3>
            <div className=" my-3">
              <ul className='list-unstyled ms-3'>
                <li><BiChevronsRight color='#3F6085' size={25} />Mantenimiento de compresores de aire.</li>
                <li><BiChevronsRight color='#3F6085' size={25} />Mantenimiento de bombas de agua y fluidos.</li>
              </ul>
            </div>
            <figure className="mb-3 col-11 mx-auto border border-3 border-black rounded">
              <img className='img-fluid object-fit-cover rounded' src={comprInd} alt="imágen ilustrativa: bomba de agua" />
            </figure>
          </article>

          <article className="shadow border p-2" data-aos="fade-up">
            <h3 className=' h2 titulo ms-3 mt-3' style={{ color: '#9B2D5B' }}> <BsFillBuildingsFill className='me-2' /> MANTENIMIENTO EDILICIO</h3>
            <figure className="my-3 col-11 mx-auto border border-3 border-black rounded">
              <img className='img-fluid object-fit-cover rounded' src={manteEdilicio} alt="imagen ilustrativa: obreros trabajando en construcción de un edificio"/>
            </figure>
            <div className="mt-2">
              <ul className='list-unstyled ms-3'>
                <li><BiChevronsRight color='#3F6085' size={25} />Sistemas de iluminación y emergencia.</li>
                <li><BiChevronsRight color='#3F6085' size={25} />Sistemas de alarmas y cámaras de seguridad.</li>
                <li><BiChevronsRight color='#3F6085' size={25} />Mantenimiento edilicio (pintura, albañilería, plomería,  carpintería, herrería, cielorrasos).</li>
                <li><BiChevronsRight color='#3F6085' size={25} />Construcciones en seco (durlock y superboard).</li>
              </ul>

            </div>
          </article>

        </div>



        <article className="col-lg-5 shadow border p-2" data-aos="fade-up">
          <h3 className=' h2 titulo ms-3 mt-2' style={{ color: '#9B2D5B' }}> <AiFillThunderbolt className='me-2' /> DIVISIÓN ELÉCTRICA</h3>
          <div className="my-4">
            <ul className='list-unstyled ms-3'>
              <li><BiChevronsRight color='#3F6085' size={25} />Mantenimiento de motores eléctricos.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Arranques estrella triangulo.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Tableros de control, comando y fuerza.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Automatización general de procesos.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Montaje de redes eléctricas.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Planimetría eléctrica.</li>
              <li><BiChevronsRight color='#3F6085' size={25} />Ejecución de tareas bajo normativas de seguridad.</li>
            </ul>

          </div>
          <figure className="mt-5 mb-3 col-11 mx-auto border border-3 border-black rounded">
            <img className='img-fluid object-fit-cover rounded' src={divElectrica} alt="imagen ilustrativa: persona controlando un tablero eléctrico" />
          </figure>
        </article>

      </div>
    </section>
  )
}

export default Section02