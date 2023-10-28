import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoTransparente from '../../img/logo-transparente.png'
import './navv.css'
import '../css/general.css'

function Navv() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top py-3 shadow">
      <Container fluid>
        <Nav.Link href="#home"><img alt="logo" src={logoTransparente} height="50" className="d-inline-block align-top" /></Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-5 fs-5">
            <Nav.Link className='linc me-3' href="#home">Inicio</Nav.Link>
            <Nav.Link className='linc me-3' href="#home">¿Quienes Somos?</Nav.Link>
            <NavDropdown className='linc me-3' title='Contacto' id="responsive-nav-dropdown">
              <NavDropdown.Item href="mailto:'nassahel.elias@gmail.com'">servemastersas@gmail.com</NavDropdown.Item>
              <NavDropdown.Item href="tel:+5493865607676">Tel 1: 3865-607676</NavDropdown.Item>
              <NavDropdown.Item href="tel:+5493865252015">Tel 2: 3865-252015</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Envíanos un mensaje</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='linc me-3' href="#aboutUs">Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navv; 