import React from 'react'
import './section01.css'
import logo from '../../img/logo-transparente.png'


function Section01() {
  return (
    <div className="contenedor-main" id="home">

      <div className="contenedor-principal d-flex align-items-center">
        <div className="contenedor-texto mx-auto text-center">
          <img className='logo-serve img-fluid col-lg-5' src={logo} alt="logo de serve master" />
          <h1 className="titulo-principal display-4 mt-3 col-12"><span className='server'>SERVE</span>MASTER S.A.S</h1>
          <h2 className="subtitulo-principal fs-2 mt-3">SERVICIOS DE MANTENIMEINTO INDUSTRIAL</h2>
        </div>
      </div>
    </div>
  )
}

export default Section01;