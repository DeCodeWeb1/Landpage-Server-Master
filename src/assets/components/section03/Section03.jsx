import React from 'react'
import '../css/general.css'
import './Section03.css' 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Section03() {
  return (
    <div className='seccion3'>
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
      <div className='formulario'>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Nombre
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            email
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Escriba su mensaje</Form.Label>
          <Form.Control as="textarea" rows={8} />
        </Form.Group>
        <Button variant="primary">Enviar</Button>{' '}

      </div>
    </div>
  )
}

export default Section03