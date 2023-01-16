import { Rating } from "@mui/material";
import React from "react";
import {
  Container,
  Image,
  ImageContainer,
  Label,
  Title,
  TitleContainer,
} from "./styles";

function CardDetails({ name, image, stars, label }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <TitleContainer>
        <Title>{name}</Title>
      </TitleContainer>
      <Rating name="read-only" value={stars} readOnly />
      <Label>{label}</Label>
    </Container>
  );
}

export default CardDetails;
