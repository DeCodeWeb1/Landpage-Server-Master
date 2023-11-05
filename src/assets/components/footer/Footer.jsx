import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import logoSM from '../../img/logo-transparente.png'


function Footer() {
  return (
    <footer className='footer container-fluid d-flex align-items-center justify-content-around pt-4'>
      <div className="row justify-content-around">
        <div className="col-12 col-lg-3 text-center pb-2">
          <img src={logoSM} alt="logo server master"  className='logo-server w-25' />
        </div>
        <div className="col-12 col-lg-4 text-center pb-2">
          <p className='text-footer'>2023 © Todos los derechos reservados Servemaster S.A.S. </p>
          <p>Desarrollado por <a className='decode' href='https://www.instagram.com/decodewebs' target='blank_'>Decode.</a> </p>
        </div>
        <div className='col-12 col-lg-3 text-center pb-2'>          
          <p className='text-footer mb-0'><FontAwesomeIcon icon={faPhone} className='phone me-2' /> <a className='tel' href="tel: +5493865607676">3865-607676</a> </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer