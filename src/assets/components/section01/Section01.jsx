import React from 'react'
import './section01.css'
import logo from '../../img/logo-transparente.png'
import fondo from '../../img/img-mantenimiento.jpg'

function Section01() {
  return (
    <div className="contenedor-main" id="home">
      {/* <img className='fondo-serve' src={fondo} alt="logo de serve master" /> */}
      <div className="contenedor-principal d-flex align-items-center">
        <div className="contenedor-texto mx-auto text-center">
          <img className='logo-serve img-fluid col-lg-5' src={logo} alt="logo de serve master" />
          <h1 className="titulo-principal display-4 mt-3 col-12"><span className='server'>SERVE</span>MASTER S.A.S</h1>
          <h2 className="subtitulo-principal fs-1 mt-3">SERVICIOS DE MANTENIMIENTO INDUSTRIAL</h2>
          <h6 className="mx-auto subtitulo-secundario text-center col-lg-5 fs-4 mt-3">Somos una empresa dedicada al manimiento industrial, que presta sus servicios de manera ágil y garantizada para cumplir con las necesidades de nuestros clientes.</h6>
        </div>
      </div>
    </div>
  )
}

export default Section01;