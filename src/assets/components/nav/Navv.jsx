import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navv.css'
import '../css/general.css'

function Navv() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top py-3 shadow">
      <Container fluid>
        <Nav.Link href="#seccionUno"><img alt="logo" src="src\assets\img\logo transparente.png" height="50" className="d-inline-block align-top" /></Nav.Link>
        <div className='me-4'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ps-4 fs-5">
              <Nav.Link className='linc me-3' href="#home">Inicio</Nav.Link>
              <NavDropdown className='linc' title='Contacto' id="basic-nav-dropdown">
                <NavDropdown.Item href="mailto:'nassahel.elias@gmail.com'">servemastersas@gmail.com</NavDropdown.Item>
                <NavDropdown.Item href="tel:+5493816990938">Tel 1: 3865-252015</NavDropdown.Item>
                <NavDropdown.Item href="tel:+5493816990938">Tel 2: 3865-607666</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className='linc me-3' href="#aboutUs">Nosotros</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navv;