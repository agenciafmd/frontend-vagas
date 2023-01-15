import React from "react";
import Carousel from "react-elastic-carousel"
import "./carrossel.css";
import Item from "./item";
import img1 from "../../assets/img1.png"

const breakPoints=[
  {width:1, itemToShow:1}
]
export const Carrossel = () => {
  return (
   <Carousel id="banners" breakPoints={breakPoints}>
    <Item> <img src={img1} alt="Imagem sobre a serie rick and morty" /> </Item>
    <Item> <img src={img1} alt="Imagem sobre a serie rick and morty" /> </Item>
    <Item> <img src={img1} alt="Imagem sobre a serie rick and morty" /> </Item>
   </Carousel>
  );
};