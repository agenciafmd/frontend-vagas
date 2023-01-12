import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Profile from '../assets/perfil.jpg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
    return(
        <section className='banner' id='about'>
            <Container>
                <Row className='d-flex flex-row align-items-center align-content-end justify-content-end my-5'>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""} >
                                    <h1>Olá, me chamo Carlos.</h1>
                                    <p>
                                        Utilizo diariamente ReactJS, Typescript, NextJS, Sass, Scrum, Azure DevOps e Git nos projetos
                                        onde estou atuando. E também utilizei jQuery, JavaScript, HTML, CSS, React Native, 
                                        Styled Components e outras tecnologias relacionadas ao Desenvolvimento Web.
                                    </p>
                                    <Button variant='light'>
                                        <a href="#contact" className='text-dark link-secondary'>Entre em contato <BsFillArrowRightCircleFill size={30}/></a> 
                                    </Button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col md={{ span: 4, offset: 2 }}>
                        <Image src={Profile} alt="Perfil" roundedCircle/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}