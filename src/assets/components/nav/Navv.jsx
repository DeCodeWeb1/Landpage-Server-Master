import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
          <Nav className="ms-auto me-lg-5 fs-5 text-center">
            <Nav.Link className='linc me-lg-3 ' href="#home">¿Quienes Somos?</Nav.Link>
            <Nav.Link className='linc me-lg-3' href="#aboutUs">Nosotros</Nav.Link>
            <Nav.Link className='linc me-lg-3' href="#contact">Contacto</Nav.Link>              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navv; 