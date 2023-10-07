import React from 'react'
import '../css/general.css'
import './section03.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Section03() {
  return (
    <div className='w-100 seccion3 mb-4' id='contact' >
      <Form>
        <div className='text-center w-100 mt-5 mb-5 h1-left-align'>
          <h1 className='contactanos'>Contactanos</h1>
        </div>
        <Form.Group className="mb-3 w-25 mx-auto " controlId="exampleForm.ControlInput1">
          <Form.Control className='input' type="text" placeholder="Nombre" />
        </Form.Group>

        <Form.Group className="mb-3 w-25 mx-auto" controlId="exampleForm.ControlInput1">
          <Form.Control className='input' type="email" placeholder="email@ejemplo.com" />
        </Form.Group>

        <Form.Group className="mb-3 w-25 mx-auto" controlId="exampleForm.ControlInput1">
          <Form.Control className='input' type="text" placeholder="Asunto" />
        </Form.Group>


        <Form.Group className="mb-5 mx-auto w-25" controlId="exampleForm.ControlInput1">
          <Form.Label className='titulos'>Motivo</Form.Label>
          <Form.Control className='input' as="textarea" rows={4} />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3  w-25 mx-auto">
          <Form.Control className='input' type="file" />
        </Form.Group>

        <Button className='enviar mx-auto' variant="primary">Enviar</Button>

      </Form>
    </div>
  )
}

export default Section03