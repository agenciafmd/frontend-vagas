import { Container, Row, Col } from 'react-bootstrap';
import proj1 from '../assets/projects/proj1.png';
import proj2 from '../assets/projects/proj2.png';
import proj3 from '../assets/projects/proj3.png';
import proj4 from '../assets/projects/proj4.png';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
    const projects = [
        {
            title: "Sistema de Login",
            url: "https://mbp-beta.vercel.app/",
            repo: "https://github.com/Cadufc91/MBP",
            imgUrl: proj1,
        },
        {
            title: "Controle Financeiro",
            url: "http://controle-financeiro-xi.vercel.app/",
            repo: "https://github.com/Cadufc91/controle-financeiro",
            imgUrl: proj2,
        },
        {
            title: "Buscador de CEP",
            url: "https://buscador-cep-cadufc91.vercel.app/",
            repo: "https://github.com/Cadufc91/Buscador-CEP",
            imgUrl: proj3,
        },
        {
            title: "Landing Page",
            url: "https://vx-cadufc91.vercel.app/",
            repo: "https://github.com/Cadufc91/Vx",
            imgUrl: proj4,
        },
    ]

    return(
        <section id='projects'>
            <Container  className='text-center my-5'>
                <Row>
                    <Col>
                        <h2 className='mb-5'>Projetos</h2>
                        <div className='d-flex w-75 flex-column flex-lg-row'>
                            {
                                projects.map((project, index) => {
                                    return(
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                        />
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}