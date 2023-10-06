import React from 'react'
import '../css/general.css'
import './section03.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Section03() {
  return (
    <div className='seccion3 mb-4' id='contact' >
      <Form>
        <h2 className='mb-5'>Contanos en que podemos ayudarte</h2>
        <Form.Group className="mb-3 w-50 mx-auto " controlId="exampleForm.ControlInput1">
          <Form.Control className='input' type="text" placeholder="Nombre" />
        </Form.Group>

        <Form.Group className="mb-3 w-50 mx-auto" controlId="exampleForm.ControlInput1">
          <Form.Control className='input' type="email" placeholder="email@ejemplo.com" />
        </Form.Group>

        <Form.Group className="mb-3 w-50 mx-auto" controlId="exampleForm.ControlInput1">
          <Form.Control className='input' type="text" placeholder="Asunto" />
        </Form.Group>


        <Form.Group className="mb-5 mx-auto w-50" controlId="exampleForm.ControlInput1">
          <Form.Label className='titulos'>Motivo</Form.Label>
          <Form.Control className='input' as="textarea" rows={4} />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3  w-50 mx-auto">
          <Form.Control className='input' type="file" />
        </Form.Group>

        <Button className='enviar mx-auto' variant="primary">Enviar</Button>

      </Form>
    </div>
  )
}

export default Section03