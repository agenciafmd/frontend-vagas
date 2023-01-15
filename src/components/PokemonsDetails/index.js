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
              <CardDetails
                name={poke.name}
                image={details[poke.name]?.image}
                stars={details[poke.name]?.star.base_stat / 5 / 5}
                label={details[poke.name]?.star.stat.name}
              />
            );
          })}
        </CardsContainer>

        {/* skills */}
      </Content>
    </Container>
  );
}

export default PokemonsDetails;
