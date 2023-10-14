import React from 'react'
import Santista from '../../img/Logo-Santista-Versiones-1.png';
import Papelera from '../../img/logo-papelera02.png';
import Budeguer from '../../img/Grupo-Budeguer-Logo-01.png';
import './ourClients.css'

function OurClients() {
  return (
    <div className='container-fluid mt-5' style={{ height: '100vh' }}>
      <div className='row justify-content-center align-items-start' style={{ minHeight: '50%' }}>
        <div className="container-fluid d-flex align-items-center ms-4 mb-4" >
          <h5 className='about m-0 text-secondary'>NUESTROS CLIENTES</h5>
          <div className='line rounded'></div>
        </div>
        <div className="mt-5 row gap-4 clients align-items-center">
          <div className='col-lg-3 m-auto d-flex justify-content-center'>
            <img src={Santista} alt="" className="img-fluid mx-auto" />
          </div>
          <div className='col-lg-3 m-auto'>
            <img src={Papelera} alt="" className="img-fluid" />
          </div>
          <div className='col-lg-3 m-auto'>
            <img src={Budeguer} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default OurClients