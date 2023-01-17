import React from "react";
import { Card } from "../Card/card.jsx";
import { Container } from "./styles.js";
import Carousel from "react-elastic-carousel"

export const Dead = ({ characters }) => {

    const deadCharacters = characters.filter(item => item?.status === "Dead")
    const renderCharacters = []
    for (let i = 0; i < 3; i++) {
        renderCharacters.push(deadCharacters[Math.floor(Math.random() * deadCharacters.length + 0)])
    }

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 600, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 }
    ];
    return (
        <Container id="carousel">
            <h1 className="title">Personagens mortos</h1>

            <div className="carrossel">
                <Carousel breakPoints={breakPoints}>
                    {renderCharacters.map(character => <Card character={character} />)}
                </Carousel>
            </div>

        </Container>
    );
};