import React from 'react'
import './section01.css'
import imagenServer from '../../img/img-server-master.jpg'



function Section01() {
	return (
		<>
			<div className="contenedor-main" id="home">
				<div className="contenedor-principal d-flex flex-column align-items-start justify-content-center">
					<h1 className="titulo-principal fs-1 mb-1"><span className='server'>Serve </span> Master S.A.S</h1>
					<h2 className="subtitulo-principal fs-4 mb-1">Servicios de mantenimiento industrial</h2>
					<div className="contenedor-texto ">
						<p className="text-acerca mt-1 fs-5 text-center">Somos una empresa dedicada al mantenimiento industrial, que presta sus servicios de manera agil y garantizada para cumplir con las necesidades de nuestros clientes</p>
						<p className="text-acerca mt-1 fs-5 text-center">Con personal capacitado, brindamos garantia y soluciones definitivas con nuestro servicio</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Section01