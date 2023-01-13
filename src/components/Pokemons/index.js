import React from "react";
import Card from "../Card";
import Title from "../Title";
import { CardsContainer, Container, Content, TitleContainer } from "./styles";

function Pokemons({ list }) {
  console.log("list", list);
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title title="Pokémons" />
        </TitleContainer>
        <CardsContainer>
          {list.map((listItem, idx) => {
            return <Card key={idx} name={listItem.name} />;
          })}
        </CardsContainer>
      </Content>
    </Container>
  );
}

export default Pokemons;
