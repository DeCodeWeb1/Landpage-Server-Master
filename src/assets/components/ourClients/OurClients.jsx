import React from 'react'
import Santista from '../../img/Logo-Santista-Versiones-1.png';
import Papelera from '../../img/logo-papelera02.png';
import Budeguer from '../../img/Grupo-Budeguer-Logo-01.png';
import './ourClients.css'

function OurClients() {
    return (
<div className='container-fluid' style={{ height: '100vh' }}>
    <div className='row justify-content-center align-items-start' style={{ minHeight: '50%' }}>
        <div className='col-12 mb-5' style={{fontFamily: 'roboto'}}>
            <h1 style={{ color: '#2e4053ff' }} className='display-4' data-aos="fade-right">Nuestros Clientes</h1>
        </div>
        <div className='col-2 m-auto'>
            <img src={Santista} alt="" className="img-fluid" />
        </div>
        <div className='col-2 m-auto'>
            <img src={Papelera} alt="" className="img-fluid" />
        </div>
        <div className='col-2 m-auto'>
            <img src={Budeguer} alt="" className="img-fluid" />
        </div>
    </div>
</div>

    )
}

export default OurClients