import React from 'react'
import Santista from '../../img/Logo-Santista-Versiones-1.png';
import PapeleraTuc from '../../img/papelera_tucuman.png';
import Budeguer from '../../img/Grupo-Budeguer-Logo-01.png';
import './ourClients.css'

function OurClients() {
  return (
    <section className='container-fluid mt-5' style={{ height: '80vh' }}>
      <div className='row justify-content-center align-items-start' style={{ minHeight: '50%' }}>
        <div className="container-fluid d-flex align-items-center ps-4 mb-4" >
          <h5 className='about m-0 text-secondary'>NUESTROS CLIENTES</h5>
          <div className='line rounded'></div>
        </div>
        <div className="mt-5 row gap-4 clients align-items-center" >
          <figure className='col-lg-3 m-auto d-flex justify-content-center' data-aos="fade-up">
            <img src={Santista} alt="Logo de la empresa Santista" className="img-fluid mx-auto" />
          </figure>
          <figure className='col-lg-3 m-auto' data-aos="fade-up">
            <img src={PapeleraTuc} alt="Logo de la empresa La Papelera Tucuman" className="img-fluid" />
          </figure>
          <figure className='col-lg-3 m-auto' data-aos="fade-up" >
            <img src={Budeguer} alt="Logo de la empresa Budeguer" className="img-fluid" />
          </figure>
        </div>
      </div>
    </section>

  )
}

export default OurClients