import React from 'react'
import '../css/general.css'
import './section03.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CiMobile4, CiMap, CiMail } from "react-icons/ci";
import { NavLink } from 'react-bootstrap';


function Section03() {
  return (
    <div className=' seccion3 py-5' id='contact' >

      <div className="row justify-content-around">
        <div className="col-12 col-lg-5">
          <div className='container-fluid d-flex align-items-center mb-4 '>
            <h5 className='about m-0 text-secondary'>DEJANOS UN MENSAJE</h5>
            <div className='line rounded  '></div>
          </div>

          <Form className='col-10 col-lg-8 mt-5 pt-5 mx-auto mb-5' action="https://formsubmit.co/ef976d832fde7d164faf825d353b9f58" method="POST" data-aos="fade-up">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control className='input' type="text" placeholder="Nombre" name='Nombre' />
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

            <input type="hidden" name="_next" value="https://servemaster.netlify.app" />

          </Form>
        </div>




        <div className="col-12 text-center ps-lg-5 text-lg-start col-lg-5">
          <div className='container-fluid d-flex align-items-center mb-5 '>
            <h5 className='about m-0 text-secondary'>CONTACTANOS</h5>
            <div className='line rounded'></div>
          </div>
          <div className=' mx-auto pt-5'>
            <h2 style={{ color: '#08213f' }}> <CiMap color='#9B2D5B' size={50} /> DIRECCIÓN</h2>
            <NavLink href='https://maps.app.goo.gl/ABNP3koQ2rYmNugs5' target='_blank'>20 de Junio 540, Aguilares, Tucumán</NavLink>
            <address></address>
          </div>
          <div className=' mx-auto mt-4'>
            <h2 style={{ color: '#08213f' }}> <CiMobile4 color='#9B2D5B' size={50} /> TELÉFONOS</h2>
            <NavLink href='tel:+5493865607676'>+549 3865-607676</NavLink>
            <NavLink href='tel:+5493865252015'>+549 3865-252015</NavLink>
          </div>
          <div className=' mx-auto mt-4'>
            <h2 style={{ color: '#08213f' }}> <CiMail color='#9B2D5B' size={50}  /> E-MAIL</h2>
            <NavLink href="mailto:'servemastersas@gmail.com'">servemastersas@gmail.com</NavLink>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Section03