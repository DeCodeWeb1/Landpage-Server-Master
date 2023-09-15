import React from 'react'
import './section01.css'
import imagenServer from '../../img/img-server-master.jpg'



function Section01() {
  return (
    <>
    <div className="contenedor-main">
      <div className="contenedor-principal border border-5 d-flex flex-column align-items-center">
        <h1 className="titulo-principal fs-1 mt-2">Server Master</h1>
        <div className="contenedor-texto">
          <p className="text-acerca mt-1 fs-5 text-start">Somos una empresa dedicada al mantenimiento industrial, que prestar sus servicios de manera agil y garantizada para cumplir con las necesidades de nuestros clientes</p>
          <p className="text-acerca mt-1 fs-5 text-start">Con personal capacitado, brindamos garantia y soluciones definitivas con nuestro servicio</p>
        </div>
        <div className="contenedor-img">
          <img src={imagenServer} alt="Imagen de mantenimiento" className="img-fluid imagen-mantenimiento" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Section01