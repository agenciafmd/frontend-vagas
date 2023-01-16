import React from "react";
import Carousel from "react-elastic-carousel"
import { Item, Container } from "./styles.js";
import img1 from "../../assets/img1.png"

const breakPoints = [
  { width: 1, itemToShow: 1 }
]
export const Carrossel = () => {
  return (
    <Container id="banners">
      <Carousel breakPoints={breakPoints}>
        <Item> <img src={img1} alt="Imagem sobre a serie rick and morty" /> </Item>
        <Item> <img src={img1} alt="Imagem sobre a serie rick and morty" /> </Item>
        <Item> <img src={img1} alt="Imagem sobre a serie rick and morty" /> </Item>
      </Carousel>
    </Container>
  );
};