import React from 'react'
import './section01.css'
import fondo from '../../img/img-mantenimiento.jpg'
import logo from '../../img/logo-transparente.png'


function Section01() {
  return (
    <div className="contenedor-main" id="home">
      <img className='imagen-fondo' src={fondo} alt="fondo imagen mantenimiento" />
      <div className="contenedor-principal d-flex align-items-center">
        <div className="contenedor-texto ml-5">
          <img className='logo-serve' src={logo} alt="logo de serve master" />
          <h1 className="titulo-principal fs-1 mt-3"><span className='server'>SERVE</span>MASTER S.A.S</h1>
          <h2 className="subtitulo-principal fs-4 mt-3">SERVICIOS DE MANTENIMEINTO INDUSTRIAL</h2>
        </div>
      </div>
    </div>
  )
}

export default Section01;