import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from 'react';
import api from "./services/api";
import emailjs from '@emailjs/browser';

interface ICep {
    localidade: string;
}

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [inputCep, setInputCep] = useState('');
    const [cep, setCep] = useState<ICep>({
        localidade: "",
    });
    const [validateCep, setValidateCep] = useState(true);

    async function handleSubmit(){
        try{
            const response = await api.get(`${inputCep}/json`);
            setCep(response.data);
            console.log(response.data);
            setValidateCep(true);
            setInputCep('');
            setCep({
                localidade: "",
            });
        } catch{
            setValidateCep(false);
            setInputCep('');
        }

        const templateParams = {
            from_name: name,
            email: email,
        }

        emailjs.send("service_ege2yfs", "template_g2i1mmf", templateParams, "dbR_tW5WL_benluEJ")
        .then((response) => {
            console.log("Email enviado", response.status, response.text)

            setName('');
            setEmail('');
            setInputCep('');
            setCep({
                localidade: "",
            });
        }, (err) => {
            console.log("Erro: ", err)
        })
    }

    return(
        <section id="contact">
            <Container className="text-center my-5">
                <h2 className="mb-3">Contato</h2>
                <Row className="d-flex align-items-center flex-column flex-lg-row">
                    <Col>
                        <h3>
                            Entre em contato
                        </h3>
                    </Col>
                    <Col>
                        <Form className="text-start">
                            <Form.Group className="m-2">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Nome" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="m-2">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="exemplo@exemplo.com" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="m-2">
                                <Form.Label>De onde você fala?</Form.Label>
                                <div className="d-flex">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Digite seu CEP" 
                                        value={inputCep}
                                        onChange={(e) => setInputCep(e.target.value)}
                                        className="me-2"
                                    />
                                    <Form.Control 
                                        type="text" 
                                        value={cep.localidade}
                                        disabled
                                    />
                                </div> 
                            </Form.Group>
                            {!validateCep && <p>Erro: CEP inválido. Exemplo: 21210210</p>}
                            <Button 
                                onClick={handleSubmit} 
                                className="m-2"
                                variant="secondary"
                            >Enviar</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}