import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

import styles from '@/styles/Newsletter.module.css';

export default function Newsletter() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {

        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        return;
        //  event.preventDefault();
        //  event.stopPropagation();
        }
        
        setShow(true);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return(
    <Row className="justify-content-center" id="action3">
      <Col xs={12} md={3} className='my-5'>
        <h1 className={styles.newsletter}>Assine nossa newsletter</h1>
      </Col>
      <Col xs={12} md={6} className='my-md-5'>

        <Form noValidate validated={validated} onSubmit={handleSubmit} className='row justify-content-end mt-md-5'>
          <Col xs={12} md={3} >
            <Form.Group className="mb-3" >
              <Form.Control required type="text" placeholder="Nome" />
              <Form.Control.Feedback type="invalid">
                campo nome é obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Control required type="email" placeholder="E-mail" />
              <Form.Control.Feedback type="invalid">
                campo e-mail é obrigatório
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          
          <Col xs={12} md={3} >
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Col>
        </Form>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Sucesso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Sua inscrição foi realizada e em breve você começará a receber nossas notícias.
          </Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal>

      </Col>
    </Row>
    );
}