import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navv.css'
import '../css/general.css'

function Navv() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top py-3 shadow">
      <Container fluid>
        <Nav.Link href="#seccionUno"><img alt="logo" src="src\assets\img\logo transparente.png" height="50" className="d-inline-block align-top" /></Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ps-4 fs-5">
            <Nav.Link className='linc me-3' href="#seccionUno">Inicio</Nav.Link>
            <Nav.Link className='linc me-3' href="#seccionDos">Nosotros</Nav.Link>
            <Nav.Link className='linc me-3' href="#seccionTres">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navv;