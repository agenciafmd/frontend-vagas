import style from '@/styles/Footer.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Footer() {
  
  return(
  <footer className={style.footer} id="action4">
    <Row>
    <Col xs={4}>
      <p className={style.text}>Navbar Scroll</p>
    </Col>
    <Col xs={4}>
      <p className={style.text}>email@email.com</p>
    </Col>
    <Col xs={4}>
      <p className={style.text}>17 9 5871-2693</p>
    </Col>
    </Row>
  </footer>
  );
}