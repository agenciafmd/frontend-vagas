import Carousel from 'react-bootstrap/Carousel';

export default function Carrosel() {

    return(
    <Carousel>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="carro1.jpg"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="carro2.webp"
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="carro3.jpg"
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}