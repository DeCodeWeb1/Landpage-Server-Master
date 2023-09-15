import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navv() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top py-4 shadow">
      <Container fluid>
        <img alt="logo" src="src\assets\img\logo transparente.png" height="50" className="d-inline-block align-top" />
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ps-4 fs-5">
            <Nav.Link className='linc me-3' href="#seccionUno">Inicio</Nav.Link>
            <Nav.Link className='linc me-3' href="#seccionDos">Que hacemos</Nav.Link>
            <Nav.Link className='linc me-3' href="#seccionTres">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navv;