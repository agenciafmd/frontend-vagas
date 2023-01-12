import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';

export function Header () {
    return(
        <>
            <Navbar bg="transparent" variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Cadufc</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#about">Sobre</Nav.Link>
                    <Nav.Link href="#services">Serviços</Nav.Link>
                    <Nav.Link href="#work">Trabalhos</Nav.Link>
                    <Nav.Link href="#contact">Contato</Nav.Link>
                </Nav>
            </Container>
            </Navbar>        
        </>
    )
}

export default Header;