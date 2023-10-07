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
      <Form className='col-10 col-lg-4 mx-auto' action="https://formsubmit.co/ef976d832fde7d164faf825d353b9f58" method="POST">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control className='input' type="text" placeholder="Nombre" name='Nombre'/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control className='input' type="email" placeholder="email@ejemplo.com" name='Emai' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control className='input' type="text" placeholder="Asunto" name='Asunto' />
        </Form.Group>


        <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
          <Form.Control className='input' as="textarea" rows={4} placeholder='Motivo' name='Comentario' />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3 col-lg-8 mx-auto">
          <Form.Control className='input' type="file" name='Archivo' />
        </Form.Group>
        <div className='text-center'>
          <Button type='submit' style={{ backgroundColor: '#3f6085ff' }} className='enviar px-4 mt-5 text-light border-light ' variant='dark'>Enviar</Button>
        </div>

        <input type="hidden" name="_next" value="https://servemaster.netlify.app"/>

      </Form>
    </div>
  )
}

export default Section03