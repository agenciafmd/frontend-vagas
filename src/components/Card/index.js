import React from "react";
import {
  Container,
  Image,
  ImageContainer,
  Title,
  TitleContainer,
} from "./styles";

function Card({ name, pokeImage, onClick }) {
  return (
    <Container pokeImage={pokeImage} onClick={onClick}>
      <ImageContainer>
        <Image src={"/pokeball.png"} />
      </ImageContainer>
      <TitleContainer>
        <Title>{name}</Title>
      </TitleContainer>
    </Container>
  );
}

export default Card;
