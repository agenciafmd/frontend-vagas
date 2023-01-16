import React from "react";
import { Card } from "../Card/card.jsx";
import { Container } from "./styles.js";


export const Alive = ({ characters }) => {

    const aliveCharacters = characters.filter(item => item?.status === "Alive")

    const renderCharacters = []

    for (let i = 0; i < 3; i++) {
        renderCharacters.push(aliveCharacters[Math.floor(Math.random() * aliveCharacters.length + 0)])
    }
    return (
        <Container id="card">
            <h1 className="title">Personagens vivos</h1>
            <div className="cards">
                {renderCharacters.map(character => <Card character={character} />)}
            </div>


        </Container>
    );
};