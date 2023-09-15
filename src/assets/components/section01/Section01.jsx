import React from 'react'
import './section01.css'
import Navv from '../nav/Navv'
import imagenServer from '../../img/img-server-master.jpg'

function Section01() {
  return (
    <>
      <Navv />
    <div className="contenedor-main">
      <div className="contenedor-principal border border-5 d-flex flex-column align-items-center">
        <h1 className="titulo-principal fs-1 mt-2">Server Master</h1>
        <div className="contenedor-texto">
          <p className="text-acerca mt-1 fs-5 text-start">Somos una empresa dedicada al mantenimiento industrial, que prestar sus servicios de manera agil y garantizada para cumplir con las necesidades de nuestros clientes</p>
          <p className="text-acerca mt-1 fs-5 text-start">Con personal capacitado, brindamos garantia y soluciones definitivas con nuestro servicio</p>
        </div>
        {/* 			<h2 className="h2-mecanica">Division Mecanica Industrial</h2>
			<div className="contenedor-mecanica-industrial">
				<p>Mantenenimiento de compresores de aire</p>
				<p>Mantenenimiento de bombas de agua y fluidos especiales</p>
				<p>Mantenenimiento de secadores de aire</p>
			</div>
			<h2 className="h2-electronica">Division Electronica</h2>
			<div className="contenedor-division-electronica">
				<div className="division-electronica">
				<p>Programacion de PLC, HMI, SACADA</p>
				<p>Servomotores, variadores de velocidad</p>
				<p>Diseño de sistemas de control con planos de papeles</p>
				<p>Planos de procesos e instrumentacion (P&ID)</p>
				<p>Planos de I/O de campo y de panel, esquemas electricos de papel</p>
				<p>Planos de conexion de red</p>
				<p>Actualizacion tecnologica de equipos productivos</p>
				<p>Reparacion de placas electronicas</p>
				</div>
			</div> */}
        <div className="contenedor-img">
          <img src={imagenServer} alt="Imagen de mantenimiento" className="img-fluid imagen-mantenimiento rounded" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Section01