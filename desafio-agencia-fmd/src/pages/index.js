import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import { useState } from "react";


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carrosel from '../components/Carrosel';
import Cards from '../components/Cards';
import Newsletter from '@/components/Newsletter';

export default function Home({ marcas }) {

  const rp = (active = 7) => {

    let pages = [];

    let k = 0;
    let j = 1;

    let a = false;
    let b = false;

    for (let i = 0; i < marcas.length; i++) {

      k++;

      if (k == 8) {

        if (active == (8*j)-1) a = true;
        else a = false;

        pages.push(
          <Pagination.Item key={j} active={a} onClick={() => {setRenderCards(rc(i)), setRenderPages(rp(i))}}>{j}</Pagination.Item>
        );

        j++;
        k = 0;

        if (marcas.length - i < 8) {

          if (active == (8*j)-1) b = true;
          else b = false;
  
          pages.push(
            <Pagination.Item key={j} active={b} onClick={() => {setRenderCards(rc(i+8)), setRenderPages(rp(i+8))}}>{j}</Pagination.Item>
          );
        }
      }
    }

    return (
    <Pagination className="justify-content-center">
      {pages}
    </Pagination>);
  }

  const rc = (page = 7) => {

    page = page - 7;

    let cards = [];

    for (let i = 0; i < 8; i++) {

      if (marcas[page+i] == undefined) break;

      let carros = ["carro1.jpg", "carro2.webp", "carro3.jpg"];
      let rnd = Math.floor(Math.random() * 3);
      
      cards.push(

        <Col xs={12} md={3} className={'my-5 '} key={i}>
            <Card>
            <Card.Img style={{  height:'12rem' }} variant="top" src={carros[rnd]} />
            <Card.Body style={{ height:'10rem' }}>
              <Card.Title>{marcas[page+i].nome}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            </Card>
        </Col>
      );
      
    }

    return cards;
  }

  const [renderCards, setRenderCards] = useState(rc());
  const [renderPages, setRenderPages] = useState(rp());

  return(
  <>
  <Navbar />
  <Carrosel />
  <Container fluid>
    <Row>
      <Col className='my-5' id="action1">
        <h1 style={{textAlign:"center"}}>Lorem Ipsum Dolor</h1>
      </Col>
    </Row>
    <Row>
      {renderPages}
    </Row>
    <Row>
      {renderCards}
    </Row>
    <Row>
      <Col className='my-5' id="action2">
        <h1 style={{textAlign:"center"}}>Lorem Ipsum Dolor</h1>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Cards />
      <div className='d-block d-sm-none'>
        <Carrosel/>
      </div>
    </Row>
    <Newsletter />
  </Container>
  <Footer />
  </>
  );
}

export async function getStaticProps() {

  const res = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
  const marcas = await res.json()

  return {
    props: {
      marcas,
    },
  }
}
