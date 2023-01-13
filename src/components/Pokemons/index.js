import React from "react";
import Card from "../Card";
import Title from "../Title";
import { CardsContainer, Container, Content, TitleContainer } from "./styles";

function Pokemons() {
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title title="Pokémons" />
        </TitleContainer>
        <CardsContainer>
          <Card />
        </CardsContainer>
      </Content>
    </Container>
  );
}

export default Pokemons;
