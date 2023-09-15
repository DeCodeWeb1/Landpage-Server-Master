import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import logoSM from '../../img/logo transparente.png'

function Footer() {
  return (
    <footer className='footer'>
      <div className='contenedor-footer d-flex align-items-center justify-content-around align-items-center pt-4'>
      <img src={logoSM} alt="logo server master" className='logo-server' />
      <p className='text-footer'>Todos los derechos reservados</p>
      <p lassName='text-footer p-5'> <span><FontAwesomeIcon icon={faPhone} className='phone' /></span> 381-5906929</p>
      </div>
    </footer>
  )
}

export default Footer