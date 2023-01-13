import React from "react";
import { Container, Image, ImageContainer, Title, TitleContainer } from "./styles";

function Card() {
  return (
    <Container>
      <ImageContainer>
        <Image src={"/pokeball.png"} />
      </ImageContainer>
      <TitleContainer>
        <Title>Lorem Ipsum</Title>
      </TitleContainer>
    </Container>
  );
}

export default Card;
