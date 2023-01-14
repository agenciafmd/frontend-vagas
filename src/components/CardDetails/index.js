import { Rating } from "@mui/material";
import React from "react";
import {
  Container,
  Image,
  ImageContainer,
  Title,
  TitleContainer,
} from "./styled";

function CardDetails({ name, image }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <TitleContainer>
        <Title>{name}</Title>
      </TitleContainer>
      <Rating name="read-only" value={5} readOnly />
    </Container>
  );
}

export default CardDetails;
