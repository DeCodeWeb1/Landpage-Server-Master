import React from 'react'
import './section01.css'


function Section01() {
    return (
            <div className="contenedor-main" id="home">
                <div className="contenedor-principal d-flex align-items-center">
                    <div className="contenedor-texto ml-5">
                        <h1 className="titulo-principal fs-1 mb-1"><span className='server'>Serve </span> Master S.A.S</h1>
                        <h2 className="subtitulo-principal fs-4 mb-1">Servicios de mantenimiento industrial</h2>
                        <p className="text-acerca mt-1 fs-5">Somos una empresa dedicada al mantenimiento industrial, que presta sus servicios de manera ágil y garantizada para cumplir con las necesidades de nuestros clientes</p>
                        <p className="text-acerca mt-1 fs-5">Con personal capacitado, brindamos garantía y soluciones definitivas con nuestro servicio</p>
                    </div>
                </div>
            </div>
    )
}

export default Section01;