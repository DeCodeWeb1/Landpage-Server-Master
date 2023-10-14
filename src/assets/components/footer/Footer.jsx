import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import logoSM from '../../img/logo-transparente.png'

function Footer() {
  return (
    <footer className='footer d-flex align-items-center justify-content-around pt-4'>
      <img src={logoSM} alt="logo server master" className='logo-server' />
      <p className='text-footer'>Todos los derechos reservados</p>
      <div className='d-flex gap-2 col-2'>
        <FontAwesomeIcon icon={faPhone} className='phone' />
        <p className='text-footer mb-0'>3865-607676</p>
      </div>
    </footer>
  )
}

export default Footer