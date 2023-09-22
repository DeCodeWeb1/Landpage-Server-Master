import React from 'react'
import '../css/general.css'
import './Section03.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


function Section03() {
  return (
    <div className='seccion3' id='contact'>
      <h2 className='contacto'>Contacto</h2>
      <div className='contenedor'>
        <Container>
          <Row>
            <Col className='iconos1'>
              <FontAwesomeIcon icon={faPhone} className='phone' />
              <h4>381-5906929</h4>
            </Col>
            <Col className='iconos2'>
              <FontAwesomeIcon icon={faEnvelope} className='mail' />
              <h4>servermasterssas@gmail.com</h4>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Section03