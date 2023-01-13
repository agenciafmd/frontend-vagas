import 'swiper/css';
import JavaScrit from '../assets/icons/icons8-javascript-100.png';
import Bootstrap from '../assets/icons/icons8-bootstrap-100.png';
import Git from '../assets/icons/icons8-git-100.png';
import jQuery from '../assets/icons/icons8-jquery-100.png';
import Next from '../assets/icons/icons8-next.js-100.png';
import Node from '../assets/icons/icons8-node-js-100.png';
import React from '../assets/icons/icons8-react-100-2.png';
import Api from '../assets/icons/icons8-rest-api-100.png';
import Sass from '../assets/icons/icons8-sass-100.png';
import Typescript from '../assets/icons/icons8-typescript-100.png';
import { Row, Col, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export const Techs = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section id='technologies'>
            <Container >
                <Row >
                    <Col >
                        <div className='text-center m-5'>
                            <h2 className='mb-5'>Tecnologias</h2>
                            <Carousel 
                                responsive={responsive} 
                                infinite={true} 
                                className="skill-slider" 
                                autoPlay={true} 
                                autoPlaySpeed={1500}
                            >
                                <div  className='text-center'>
                                    <img src={JavaScrit} alt="" />
                                    <h5>JavaScrit</h5>
                                </div>
                                <div  className='text-center'>
                                    <img src={Bootstrap} alt="" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className='text-center'>
                                    <img src={Git} alt="" />
                                    <h5>Git</h5>
                                </div>
                                <div className='text-center'>
                                    <img src={jQuery} alt="" />
                                    <h5>jQuery</h5>
                                </div>
                                <div className='text-center'>
                                    <img src={Next} alt="" />
                                    <h5>Next</h5>
                                </div>
                                <div className='text-center'>
                                    <img src={Node} alt="" />
                                    <h5>Node</h5>
                                </div>
                                <div className='text-center'>
                                    <img src={React} alt="" />
                                    <h5>React</h5>
                                </div>
                                <div className='text-center'>
                                    <img src={Api} alt="" />
                                    <h5>Rest API</h5>
                                </div>
                                <div className='text-center'>
                                    <img src={Sass} alt="" />
                                    <h5>Sass</h5>
                                </div>
                                <div className='text-center'>
                                    <img src={Typescript} alt="" />
                                    <h5>Typescript</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}