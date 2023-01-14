import React from "react";
import { CardsContainer, Container, Content, TitleContainer } from "./styles";
import Title from "../Title";
import CardDetails from "../CardDetails";

function PokemonsDetails({ list, details }) {
  console.log("list", list);
  console.log("details", details);
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title title="Habilidades" />
        </TitleContainer>

        <CardsContainer>
          {list.map((poke, idx) => {
            return (
              <CardDetails name={poke.name} image={details[poke.name]?.image} />
            );
          })}
        </CardsContainer>

        {/* skills */}
      </Content>
    </Container>
  );
}

export default PokemonsDetails;
