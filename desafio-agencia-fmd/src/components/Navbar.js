import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Nvbar() {

    return (
    <Navbar bg="light" expand="lg">
        <Container fluid className='mx-3'>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0"
            //style={{ maxHeight: '100px' }}
            navbarScroll
            >
            </Nav>
            <Nav>
            <Nav.Link href="#action1">Link para seção 1</Nav.Link>
            <Nav.Link href="#action2">Link para seção 2</Nav.Link>
            <Nav.Link href="#action3">Link para seção 3</Nav.Link>
            <Nav.Link href="#action4">Link para o footer</Nav.Link>
            </Nav>
            
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}