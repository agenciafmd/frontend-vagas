import React from "react";
import { Center, Container, ImageContainer, MenuContainer } from "./styles";

function Header() {
  return (
    <Container>
      <Center>
        <ImageContainer>
          <img
            src={"/pokemon-logo.png"}
            alt="Logo"
            width={150}
            height={40}
          ></img>
        </ImageContainer>
        <MenuContainer>
          <h2>Label</h2>
        </MenuContainer>
      </Center>
    </Container>
  );
}

export default Header;
