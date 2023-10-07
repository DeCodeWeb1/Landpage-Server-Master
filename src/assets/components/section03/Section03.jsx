import React from 'react'
import '../css/general.css'
import './section03.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Section03() {
  return (
    <div className=' seccion3 mb-4' id='contact' >
      <div className='mt-5 mb-5 '>
        <h1 className='contactanos text-start ms-3'>Contáctanos</h1>
      </div>
      <Form className='col-10 col-lg-4 mx-auto'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control className='input' type="text" placeholder="Nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control className='input' type="email" placeholder="email@ejemplo.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control className='input' type="text" placeholder="Asunto" />
        </Form.Group>


        <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
          <Form.Control className='input' as="textarea" rows={4} placeholder='Motivo' />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3 col-lg-8 mx-auto">
          <Form.Control className='input' type="file" />
        </Form.Group>
        <div className='text-center'>
          <Button style={{ backgroundColor: '#3f6085ff' }} className='enviar px-4 mt-5 text-light border-light ' variant='dark'>Enviar</Button>
        </div>

      </Form>
    </div>
  )
}

export default Section03