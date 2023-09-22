import React from 'react'
import '../css/general.css'
import './Section03.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Section03() {
  return (
    <div className='seccion3 container-inf row mx-auto d-flex justify-content-evenly
    text-aling-center  mb-4 p-4' id='contactUs'>
      <h1>Contactanos</h1>
      <Form className='formulario'>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="nombre@ejemplo.com" />
        </Form.Group>

        <Form.Label>Asunto</Form.Label>
        <Form.Control type="text" placeholder="Asunto" />

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label> </Form.Label>
          <Form.Control as="textarea" rows={3} placeholder='Escriba su mensaje' />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="primary">Enviar</Button>{' '}

      </Form>
    </div>
  )
}

export default Section03