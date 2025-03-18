import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="navbar-expand-lg" >
        <Container fluid className="border border-light m-3 rounded-bottom-4">
          <Navbar.Brand href="#home" className="text-white">
            Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Nav.Link href="#about" className="text-white">
                About
              </Nav.Link>
              
              <Nav.Link href="#skill" className="text-white">
                Skills
              </Nav.Link>
              <Nav.Link href="#project" className="text-white">
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}