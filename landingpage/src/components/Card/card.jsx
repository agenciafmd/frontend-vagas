import React from "react";
import { Container } from "./styles.js";


export const Card = ({ character }) => {
    return (
        <Container alive={character?.status}>
            <h1>{character?.name}</h1>
            <h2>{character?.species}</h2>
            <h3>{character?.gender}</h3>
            <div><img src={character?.image} /></div>
        </Container>
    );
};