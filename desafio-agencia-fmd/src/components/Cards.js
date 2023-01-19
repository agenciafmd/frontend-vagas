
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Cards() {

    return(
    <>
    <Col xs={12} md={3} className='my-5 d-none d-sm-block'>
        <Card>
        <Card.Img style={{  height:'12rem' }} variant="top" src="carro1.jpg" />
        <Card.Body style={{ height:'10rem' }}>
          <Card.Title>First slide label</Card.Title>
          <Card.Text>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Card.Text>
        </Card.Body>
        </Card>
    </Col>

    <Col xs={12} md={3} className='my-5 d-none d-sm-block'>
        <Card>
        <Card.Img style={{  height:'12rem' }} variant="top" src="carro2.webp" />
        <Card.Body style={{ height:'10rem' }}>
          <Card.Title>Second slide label</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Card.Text>
        </Card.Body>
        </Card>
    </Col>

    <Col xs={12} md={3} className='my-5 d-none d-sm-block'>
        <Card>
        <Card.Img style={{  height:'12rem' }} variant="top" src="carro3.jpg" />
        <Card.Body style={{ height:'10rem' }}>
          <Card.Title>Third slide label</Card.Title>
          <Card.Text>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </Card.Text>
        </Card.Body>
        </Card>
    </Col>
    </>
    );
}