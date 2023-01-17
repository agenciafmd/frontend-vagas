import React from "react";
import { CardsContainer, Container, Content, TitleContainer } from "./styles";
import Title from "../Title";
import CardDetails from "../CardDetails";

function PokemonsDetails({ list, details }) {
  return (
    <Container id="section-pokemons-details">
      <Content>
        <TitleContainer>
          <Title title="Outros Pokémons" />
        </TitleContainer>

        <CardsContainer>
          {list.map((poke, idx) => {
            return (
              <CardDetails
                name={poke.name}
                image={details[poke.name]?.image}
                stars={details[poke.name]?.star.base_stat / 5 / 5}
                label={details[poke.name]?.star.stat.name}
              />
            );
          })}
        </CardsContainer>
      </Content>
    </Container>
  );
}

export default PokemonsDetails;
